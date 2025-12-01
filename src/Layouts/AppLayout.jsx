import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../ui/NavBar";
import Footer from "../ui/Footer";

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default AppLayout;
