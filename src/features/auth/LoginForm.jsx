import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { validationRules } from "../../utils/validationRules";
import useLogin from "./useLogin";
import { sanitizeEmail, sanitizeInput } from "../../utils/sanitizer";
function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { isLogin, login } = useLogin();
  function onSubmit(data) {
    const saintizedData = {
      email: sanitizeEmail(data.email),
      password: sanitizeInput(data.password),
    };
    login(saintizedData);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-5">
        {/* email */}
        <div>
          <input
            type="email"
            {...register("email", validationRules.email)}
            className={`w-full border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded px-5 py-4 outline-none focus:border-violet-500`}
            placeholder="Enter your email"
            disabled={isLogin}
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
            disabled={isLogin}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center mt-8 px-2">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="remember-me"
            className=" accent-violet-600 scale-150"
          />
          <label htmlFor="remember-me" className="text-sm text-violet-500">
            Remember me
          </label>
        </div>
        <Link
          to={"forgetpassword"}
          className="text-sm text-violet-500 hover:text-violet-700"
        >
          Forgot password?
        </Link>
      </div>
      <div className="flex flex-col gap-3 mt-8">
        <button className="w-full text-2xl font-semibold bg-main-orange text-white border border-gray-300 rounded px-5 py-4 outline-none">
          Login
        </button>
        <Link
          className="w-full text-center text-2xl font-semibold  text-violet-500 border border-gray-300 rounded px-5 py-4 outline-none"
          to={"register"}
        >
          Register
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;
