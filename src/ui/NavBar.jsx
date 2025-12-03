import React, { useState } from "react";
import BookLogo from "../assets/booklogo.png";
import { Link, NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { SlBasketLoaded } from "react-icons/sl";
import { MdLogout } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import MobileSideBar from "./MobileSideBar";

function NavBar() {
  const [isSideBarOpen,setIsSideBarOpen]=useState(false)
  return (
    <>
    <nav className=" sticky top-0 z-40 px-5 md:px-[8vw] py-3 bg-white border-b border-gray-200 shadow ">
      <div className="flex justify-between items-center">
        {/* left side */}
        <div>
          <img
            src={BookLogo}
            alt="logo"
            className="w-12 rounded-full overflow-hidden object-cover ring-2 ring-violet-950 bg-violet-950"
          />
        </div>
        {/* center side */}
        <div className="links hidden md:flex items-center gap-2">
          <NavLink
            className={({ isActive }) =>
              `text-lg px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "text-violet-700 font-semibold bg-violet-50"
                  : "text-gray-700 hover:text-violet-600 hover:bg-gray-50"
              }`
            }
            to={"/app"}
            end
          >
            Home
          </NavLink>
          <span className="hidden sm:block w-px h-5 bg-gray-300"></span>
          <NavLink
            className={({ isActive }) =>
              `text-lg px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "text-violet-700 font-semibold bg-violet-50"
                  : "text-gray-700 hover:text-violet-600 hover:bg-gray-50"
              }`
            }
            to={"books"}
          >
            books
          </NavLink>
          <span className="hidden sm:block w-px h-5 bg-gray-300"></span>
          <span className="text-lg px-4 py-2 rounded-lg transition-all duration-200  text-gray-700 hover:text-violet-600 hover:bg-gray-50 cursor-pointer">
            New Release
          </span>
        </div>
        {/* right side */}
        <div className="flex items-center gap-4">
          <Link>
            <FaRegUser size={20} className="text-violet-600" />
          </Link>
          <span className=" block w-px h-5 bg-gray-300"></span>
          <div className=" relative">
            <Link>
              <SlBasketLoaded size={20} className="text-violet-600" />
            </Link>
            <span className=" absolute -top-[50%] -right-[50%] text-white text-xs bg-main-orange rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </div>
          <span className="block w-px h-5 bg-gray-300"></span>
          <button className="hidden md:block">
            <MdLogout size={20} className="text-violet-600 " />
          </button>
          <button onClick={()=>setIsSideBarOpen(true)} className="block  md:hidden">
            <FaBars size={20} className="text-violet-600 " />
          </button>
        </div>
      </div>
    </nav>
    <MobileSideBar isOpen={isSideBarOpen} onClose={()=>setIsSideBarOpen(false)}/>
    </>
  );
}

export default NavBar;
