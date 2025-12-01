import React from "react";
import BookLogo from "../assets/booklogo.png";
function NavBar() {
  return (
    <nav className="px-5 md:px-[8vw] py-5">
      <div>
        {/* left side */}
        <div>
          <img
            src={BookLogo}
            alt="logo"
            className="w-12 rounded-full overflow-hidden object-cover bg-violet-950"
          />
        </div>
        {/* center side */}
        <div>
            
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
