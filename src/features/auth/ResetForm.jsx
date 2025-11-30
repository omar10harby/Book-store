import React from "react";
import { useForm } from "react-hook-form";
import useResetPassword from "./useResetPassword";
import { validationRules } from "../../utils/validationRules";
import {
  sanitizeEmail,
  sanitizeInput,
  sanitizeOTP,
} from "../../utils/sanitizer";
function ResetForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { resetpassword, isResetting } = useResetPassword();
  function onSubmit(data) {
    const saintizedData = {
      email: sanitizeEmail(data.email),
      otp: sanitizeOTP(data.otp),
      password: sanitizeInput(data.password),
    };
    resetpassword(saintizedData, {
      onSettled: () => {
        reset();
      },
    });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-5">
        <div>
          <input
            type="email"
            {...register("email", validationRules.email)}
            className={`w-full border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded px-5 py-4 outline-none focus:border-violet-500`}
            placeholder="Enter your email"
            disabled={isResetting}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <input
            type="password"
            className={`w-full border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded px-5 py-4 outline-none focus:border-violet-500`}
            placeholder="Enter OTP code"
            {...register("otp", validationRules.otp)}
            disabled={isResetting}

          />
          {errors?.otp && (<p className="text-red-500 text-sm mt-1">{errors.otp.message}</p>)}
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
            disabled={isResetting}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>
      <div className="mt-8">
        <button className="w-full text-2xl font-semibold bg-main-orange text-white border border-gray-300 rounded px-5 py-4 outline-none disabled:opacity-50 disabled:cursor-not-allowed">
          Reset Password
        </button>
      </div>
    </form>
  );
}

export default ResetForm;
