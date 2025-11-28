import React from "react";
import { Link } from "react-router-dom";

function RegisterForm() {
  return (
    <form>
      <div className="flex flex-col gap-5">
        <div className="flex gap-2 ">
          <input
            type="text"
            className="w-1/2 border border-gray-300 rounded px-5 py-4 outline-none"
            placeholder="Enter your first name"
          />
          <input
            type="text"
            className="w-1/2 border border-gray-300 rounded px-5 py-4 outline-none"
            placeholder="Enter your last name"
          />
        </div>
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

      <div className="flex flex-col gap-3 mt-6">
        <button className="w-full text-2xl font-semibold bg-main-orange text-white border border-gray-300 rounded px-5 py-4 outline-none">
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
