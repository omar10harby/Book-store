import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import { MdLogout } from "react-icons/md";

function MobileSideBar({ isOpen, onClose }) {
  const links = [
    { to: "/app", label: "Home", icon: "🏠", end: true, index: 0 },
    { to: "/app/books", label: "Books", icon: "📚", index: 1 },
    { to: null, label: "New Release", icon: "✨", index: 2 },
  ];
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="md:hidden fixed inset-0 backdrop-blur-md z-50"
            onClick={onClose}
          ></motion.div>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="md:hidden fixed top-0 py-14 px-4 right-0 w-2/3  bg-white shadow-md z-50 h-screen flex flex-col justify-between"
          >
            <ul className="flex flex-col gap-5">
              {links.map((li) => (
                <motion.li
                  key={li.index}
                  custom={li.index}
                  initial={{ x: "100%", opacity: 0 }}
                  animate={(i) => ({
                    x: 0,
                    opacity: 1,
                    transition: {
                      delay: i * 0.1,
                      duration: 0.4,
                    },
                  })}
                >
                  {li.to ? (
                    <NavLink
                      className={({ isActive }) =>
                        `text-lg block  px-5 py-2 rounded-lg transition-all duration-200 ${
                          isActive
                            ? "text-violet-700 font-semibold bg-violet-50"
                            : "text-gray-700 hover:text-violet-600 hover:bg-gray-50"
                        }`
                      }
                      to={li.to}
                      end={li.end || false}
                    >
                      {li.icon} {li.label}
                    </NavLink>
                  ) : (
                    <button className="text-lg block w-full text-start  px-5 py-2 rounded-lg text-gray-700 hover:text-violet-600 hover:bg-gray-50 transition-all duration-200">
                      {li.icon} {li.label}
                    </button>
                  )}
                </motion.li>
              ))}
            </ul>

            <motion.button
              initial={{ x: "100%", opacity: 0 }}
              animate={{
                x:0,
                opacity:1,
                transition:{
                  duration:0.3,
                  delay:0.4
                }
              }}
              className="flex items-center gap-2 rounded-md px-14 py-3 mx-auto w-fit text-white bg-main-orange"
            >
              Logout
              <MdLogout />
            </motion.button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileSideBar;
