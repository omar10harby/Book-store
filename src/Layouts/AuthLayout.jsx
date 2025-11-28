import React from "react";
import AuthImage from "../assets/bookstoreImg-DyfDc7JQ.jpg";
import { Outlet } from "react-router-dom";
function AuthLayout() {
  return (
    <div className="flex h-dvh">
      <div
        className=" hidden relative md:block md:w-1/2"
        style={{
          backgroundImage: `url(${AuthImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" absolute inset-0 bg-black/35"></div>
      </div>
      <div className="w-full md:w-1/2  px-28 py-12">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
