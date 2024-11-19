import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { motion } from "motion/react";

import PagesSlider from "../ui/PagesSlider";
import Navbar from "../ui/navbar/Navbar";

export default function AppLayout() {
  return (
    <div className="box-border relative flex flex-col justify-between p-2 h-dvh w-dvw bg-black bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-900/50 via-black to-black text-slate-100 scroll-smooth">
      <Navbar />

      <div className="flex-grow overflow-auto no-scrollbar scroll-smooth">
        <Outlet />
      </div>

      <PagesSlider />
    </div>
  );
}
