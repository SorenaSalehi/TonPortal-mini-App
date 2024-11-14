import React from "react";
import { FaHome } from "react-icons/fa";
import { FaMoneyBillTransfer, FaPeopleGroup } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function PagesSlider() {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "scale-125 text-slate-800/50 hover:cursor-none" : ""
        }
      >
        <FaHome />
      </NavLink>
      <NavLink
        to="/groups"
        className={({ isActive }) =>
          isActive ? "scale-125 text-slate-800/50 hover:cursor-none" : ""
        }
      >
        <FaPeopleGroup />
      </NavLink>
      <FaMoneyBillTransfer />
    </>
  );
}
