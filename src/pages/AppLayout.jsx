import React from "react";
import { Outlet } from "react-router";

import PagesSlider from "../ui/PagesSlider";
import Navbar from "../ui/navbar/Navbar";
import { useSelector } from "react-redux";

export default function AppLayout() {
  

  return (
    <div className="box-border relative flex flex-col p-2 h-dvh w-dvw bg-color text-slate-100 justify-evenly">
      <Navbar />
      <main className="overflow-scroll no-scrollbar">
        <Outlet />
      </main>
      <div className="sticky z-10 flex justify-between w-48 px-4 py-2 text-2xl transform -translate-x-1/2 -translate-y-1/2 left-1/2 right-1/2 bg-slate-300 rounded-xl text-slate-800 btn-shadow">
        <PagesSlider />
      </div>
    </div>
  );
}
