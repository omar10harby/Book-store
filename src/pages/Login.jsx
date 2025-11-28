import React from "react";
import logo from "../assets/booksLogo-B7FMCcBu.png";
import LoginForm from "../features/auth/LoginForm";
function Login() {
  return (
    <div>
      <div className="mb-10">
        <img src={logo} alt="logo"  className="w-32 mx-auto"/>
      </div>
      <div className="mb-8">
        <p className="text-gray-500">Welcome back!</p>
        <h2 className="text-3xl font-semibold">Login to your account</h2>
      </div>
      <LoginForm/>
    </div>
  );
}

export default Login;
