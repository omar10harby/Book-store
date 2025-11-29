import React from "react";

function ResetForm() {
  return (
   <form >
      <div className="flex flex-col gap-5">
        <input
          type="email"
          className="border border-gray-300 rounded px-5 py-4 outline-none"
          placeholder="Enter your email"
        />
        <input
          type="text"
          className="border border-gray-300 rounded px-5 py-4 outline-none"
          placeholder="Enter OTP code"
        />
        <input
          type="password"
    
          className="border border-gray-300 rounded px-5 py-4 outline-none"
          placeholder="Enter new password"
        />
      </div>
      <div className="mt-8">
        <button 
          className="w-full text-2xl font-semibold bg-main-orange text-white border border-gray-300 rounded px-5 py-4 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Reset Password
        </button>
      </div>
    </form>
  );
}

export default ResetForm;
