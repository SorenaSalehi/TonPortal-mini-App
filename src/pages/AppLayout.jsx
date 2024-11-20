import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { motion } from "motion/react";

import PagesSlider from "../ui/PagesSlider";
import Navbar from "../ui/navbar/Navbar";

export default function AppLayout() {
  return (
    <div className="box-border relative flex flex-col justify-between overflow-hidden h-dvh w-dvw text-slate-100 scroll-smooth">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 object-cover w-full h-full -z-10 backdrop-blur-3xl"
      >
        <source src="bg3-low.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/30 -z-10 backdrop-blur-3xl" />
      <Navbar />

      <div className="overflow-auto no-scrollbar h-[150rem]">
        <Outlet />
      </div>

      <PagesSlider />
    </div>
  );
}
