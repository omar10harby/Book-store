import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useRegister from "./useRegister";
import { validationRules } from "../../utils/validationRules";
import { sanitizeEmail, sanitizeInput, sanitizeName } from "../../utils/sanitizer";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { Register, isRegistering, error } = useRegister();
  function onSubmit(data) {
    console.log(data);

    const sanitizedData = {
      first_name: sanitizeName(data.first_name),
      last_name: sanitizeName(data.last_name),
      email: sanitizeEmail(data.email),
      password: sanitizeInput(data.password),
    };
    Register(sanitizedData,{
      onSettled:()=>{
        reset()
      }
    })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-5">
        <div className="flex gap-2 ">
          {/* first name */}
          <div className="w-1/2">
            <input
              type="text"
              {...register("first_name", validationRules.firstName)}
              className={`w-full border ${
                errors.first_name ? "border-red-500" : "border-gray-300"
              } rounded px-5 py-4 outline-none focus:border-violet-500`}
              placeholder="First name"
              disabled={isRegistering}
            />
            {errors.first_name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.first_name.message}
              </p>
            )}
          </div>
          {/* last name */}
          <div className="w-1/2">
            <input
              type="text"
              {...register("last_name", validationRules.lastName)}
              className={`w-full border ${
                errors.last_name ? "border-red-500" : "border-gray-300"
              } rounded px-5 py-4 outline-none focus:border-violet-500`}
              placeholder="Last name"
              disabled={isRegistering}
            />
            {errors.last_name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.last_name.message}
              </p>
            )}
          </div>
        </div>
        {/* email */}
        <div>
          <input
            type="email"
            {...register("email", validationRules.email)}
            className={`w-full border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded px-5 py-4 outline-none focus:border-violet-500`}
            placeholder="Enter your email"
            disabled={isRegistering}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        {/* password */}
        <div>
          <input
            type="password"
            {...register("password", validationRules.password)}
            className={`w-full border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded px-5 py-4 outline-none focus:border-violet-500`}
            placeholder="Enter your password"
            disabled={isRegistering}
            autoComplete="new-password"
            maxLength={50}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-6">
        <button
          type="submit"
          className="w-full text-2xl font-semibold bg-main-orange text-white border border-gray-300 rounded px-5 py-4 outline-none"
        >
          Register
        </button>
        <Link
          className="w- text-center text-2xl font-semibold  text-violet-500 border border-gray-300 rounded px-5 py-4 outline-none"
          to={"/"}
        >
          Login
        </Link>
      </div>
    </form>
  );
}

export default RegisterForm;
