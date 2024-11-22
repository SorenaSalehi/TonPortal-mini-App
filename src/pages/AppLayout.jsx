import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { motion } from "motion/react";

import PagesSlider from "../ui/PagesSlider";
import Navbar from "../ui/navbar/Navbar";

export default function AppLayout() {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const video = document.createElement("video");
    video.src = "mainBg.mp4";
    video.onloadeddata = () => setBgLoaded(true);

    return () => {
      // Clean up video element to prevent memory leaks
      video.onloadeddata = null;
    };
  }, []);

  return (
    <div
      className={`${
        !bgLoaded && "bg-color "
      }box-border relative flex flex-col justify-start px-3 overflow-hidden h-dvh w-dvw text-slate-100 scroll-smooth`}
    >
      {bgLoaded && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 object-cover w-full h-full -z-10 backdrop-blur-3xl"
        >
          <source src="mainBg.mp4" type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-black/30 -z-10 backdrop-blur-3xl" />
      <Navbar />
      <div className="px-2 overflow-auto no-scrollbar">
        <Outlet />
      </div>
      <PagesSlider />
    </div>
  );
}
