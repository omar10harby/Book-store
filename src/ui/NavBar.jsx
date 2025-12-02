import React from "react";
import BookLogo from "../assets/booklogo.png";
import { Link, NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { SlBasketLoaded } from "react-icons/sl";
import { MdLogout } from "react-icons/md";

function NavBar() {
  return (
    <nav className=" px-5 md:px-[8vw] py-3 border-b border-gray-200 shadow ">
      <div className="flex justify-between items-center">
        {/* left side */}
        <div>
          <img
            src={BookLogo}
            alt="logo"
            className="w-12 rounded-full overflow-hidden object-cover bg-violet-950"
          />
        </div>
        {/* center side */}
        <div className="links flex items-center gap-2">
          <NavLink
            className={({ isActive }) =>
              `text-lg px-2 py-1${
                isActive
                  ? " text-violet-700 font-semibold border-b-2 border-violet-700"
                  : " text-gray-700 hover:text-violet-600"
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
              `text-lg px-2 py-1${
                isActive
                  ? " text-violet-700 font-semibold border-b-2 border-violet-700"
                  : " text-gray-700 hover:text-violet-600"
              }`
            }
            to={"books"}
          >
            books
          </NavLink>
          <span className="hidden sm:block w-px h-5 bg-gray-300"></span>
          <span className="text-lg inline-block text-gray-700 hover:text-violet-600 cursor-pointer">
            New Release
          </span>
        </div>
        {/* right side */}
        <div className="flex items-center gap-4">
          <Link>
            <FaRegUser size={20} className="text-violet-600" />
          </Link>
          <span className="hidden sm:block w-px h-5 bg-gray-300"></span>
           <Link>
            <SlBasketLoaded size={20} className="text-violet-600" />
          </Link>
          <span className="hidden sm:block w-px h-5 bg-gray-300"></span>
          <MdLogout size={20} className="text-violet-600"/> 
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
