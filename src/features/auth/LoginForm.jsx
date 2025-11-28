import React from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  
  function onSubmit(e){
    e.preventDefault()
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-5">
        <input
          type="text"
          className="border border-gray-300 rounded px-5 py-4 outline-none"
          placeholder="Enter your email"
        />
        <input
          type="password"
          className="border border-gray-300 rounded px-5 py-4 outline-none"
          placeholder="Enter your password"
        />
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
