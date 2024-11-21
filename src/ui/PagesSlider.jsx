import React from "react";
import { motion } from "motion/react";
import { FaHome } from "react-icons/fa";
import { FaMoneyBillTransfer, FaPeopleGroup } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function PagesSlider() {
  return (
    <motion.ul className="fixed z-10 flex justify-between px-4 py-2 overflow-hidden text-2xl transform -translate-x-1/2 rounded-2xl bottom-4 left-1/2 w-28 bg-stone-700/95 text-slate-100 btn-shadow ">
      <motion.li whileTap={{ y: -10 }}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "scale-125 delay-200 text-slate-100 hover:cursor-none"
              : "text-slate-300/95"
          }
        >
          <FaHome />
        </NavLink>
      </motion.li>
      <motion.li whileTap={{ y: -10 }}>
        <NavLink
          to="/groups"
          className={({ isActive }) =>
            isActive
              ? "scale-150 delay-200 text-slate-100 hover:cursor-none"
              : "text-slate-300/95"
          }
        >
          <FaPeopleGroup />
        </NavLink>
      </motion.li>
      {/* <motion.li>
        <FaMoneyBillTransfer />
      </motion.li> */}
    </motion.ul>
  );
}
