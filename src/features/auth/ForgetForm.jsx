import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useForgetPassword from "./useForgetPassword"
import { validationRules } from "../../utils/validationRules";
import { sanitizeEmail } from "../../utils/sanitizer";
function ForgetForm() {
  const {register,handleSubmit,formState:{errors},reset}=useForm()
  const {forgetPassword,isLoading}=useForgetPassword()
  function onSubmit({email}){
    const saintizedEmail={
      email:sanitizeEmail(email)
    }
    forgetPassword(saintizedEmail,{
      onSettled:()=>{
        reset()
      }
    })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-5">
        <input
          type="text"
          className="border border-gray-300 rounded px-5 py-4 outline-none"
          placeholder="Enter your email"
          {...register("email",validationRules.email)}
        />
      </div>

      <div className="flex flex-col gap-3 mt-8">
        <button className="w-full text-2xl font-semibold bg-main-orange text-white border border-gray-300 rounded px-5 py-4 outline-none disabled:opacity-50 disabled:cursor-not-allowed">
          Send
        </button>
      </div>
    </form>
  );
}

export default ForgetForm;
