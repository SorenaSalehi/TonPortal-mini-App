import React from "react";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import { RiSwapFill } from "react-icons/ri";

export default function Navigation() {
  return (
    <motion.ul className="fixed z-10 flex justify-between px-6 py-2 space-x-10 overflow-hidden text-2xl transform -translate-x-1/2 shadow-lg bg-stone-800 rounded-2xl bottom-8 left-1/2 text-slate-100 ">
      <motion.li
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center justify-center w-6 ${
              isActive ? "scale-150 delay-200 " : "opacity-50"
            }`
          }
        >
          <img src="home.png" loading="lazy" />
        </NavLink>
      </motion.li>
      <motion.li
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center"
      >
        <NavLink
          to="/groups"
          className={({ isActive }) =>
            `flex items-center justify-center w-6 ${
              isActive ? "scale-150 delay-200 " : "opacity-50"
            }`
          }
        >
          <img src="group.png" loading="lazy" />
        </NavLink>
      </motion.li>
      <motion.li
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center"
      >
        <NavLink
          to="/swap"
          className={({ isActive }) =>
            `flex items-center justify-center w-6 ${
              isActive ? "scale-150 delay-200 " : "opacity-50"
            }`
          }
        >
          <RiSwapFill />
        </NavLink>
      </motion.li>
    </motion.ul>
  );
}
