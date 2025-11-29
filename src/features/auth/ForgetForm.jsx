import React from "react";
import { Link } from "react-router-dom";

function ForgetForm() {
  return (
    <form>
      <div className="flex flex-col gap-5">
        <input
          type="text"
          className="border border-gray-300 rounded px-5 py-4 outline-none"
          placeholder="Enter your email"
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
