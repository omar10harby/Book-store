import React from "react";
import logo from "../assets/booksLogo-B7FMCcBu.png";
import ForgetForm from "../features/auth/ForgetForm";

function ForgetPassword() {
  return (
    <div>
      <div className="mb-10">
        <img src={logo} alt="logo" className="w-32 mx-auto" />
      </div>
      <div className="mb-8">
        <p className="text-gray-500">Forgot your password?</p>
        <h2 className="text-3xl font-semibold">Reset Password</h2>
      </div>
      <ForgetForm/>
    </div>
  );
}

export default ForgetPassword;
