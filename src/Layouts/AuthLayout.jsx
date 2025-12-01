import React from "react";
import AuthImage from "../assets/bookstoreImg-DyfDc7JQ.jpg";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* قسم الصورة */}
      <div className="hidden md:block md:w-1/2 relative overflow-hidden">
        <img
          src={AuthImage}
          alt="Bookstore"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
             
      </div>

      {/* قسم النماذج */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-28 py-8 md:py-12 bg-white overflow-y-auto">
        <div className="w-full max-w-md my-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;