import React from "react";
import { FaHome } from "react-icons/fa";
import { FaMoneyBillTransfer, FaPeopleGroup } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function PagesSlider() {
  return (
    <div className="sticky z-10 flex justify-between w-48 px-4 py-2 text-2xl transform -translate-x-1/2 -translate-y-1/2 rounded-md left-1/2 right-1/2 bg-slate-300/25 text-slate-300 btn-shadow backdrop-blur-3xl">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "scale-125 delay-200 text-slate-500/55 hover:cursor-none"
            : ""
        }
      >
        <FaHome />
      </NavLink>
      <NavLink
        to="/groups"
        className={({ isActive }) =>
          isActive
            ? "scale-125 delay-200 text-slate-500/50 hover:cursor-none"
            : ""
        }
      >
        <FaPeopleGroup />
      </NavLink>
      <FaMoneyBillTransfer />
    </div>
  );
}
