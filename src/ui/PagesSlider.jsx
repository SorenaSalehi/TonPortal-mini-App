import React from "react";
import { motion } from "motion/react";
import { FaHome } from "react-icons/fa";
import { FaMoneyBillTransfer, FaPeopleGroup } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function PagesSlider() {
  return (
    <motion.ul className="sticky bottom-0 z-10 flex justify-between px-4 py-2 text-2xl transform -translate-x-1/2 -translate-y-1/2 rounded-md w-28 left-1/2 right-1/2 bg-slate-300/25 text-slate-300 btn-shadow backdrop-blur-3xl">
      <motion.li whileTap={{ y: -10 }}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "scale-125 delay-200 text-slate-100 hover:cursor-none"
              : "text-slate-300/55"
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
              : "text-slate-300/55"
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
