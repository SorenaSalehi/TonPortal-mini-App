import React from "react";
import { Outlet } from "react-router";

import PagesSlider from "../ui/PagesSlider";
import Navbar from "../ui/navbar/Navbar";

export default function AppLayout() {
  return (
    <div className="box-border relative flex flex-col p-2 h-dvh w-dvw bg-black bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-900/50 via-black to-black text-slate-100 justify-evenly scroll-smooth">
      <Navbar />
      <main className="overflow-scroll no-scrollbar scroll-smooth">
        <Outlet />
      </main>
      <div className="sticky z-10 flex justify-between w-48 px-4 py-2 text-2xl transform -translate-x-1/2 -translate-y-1/2 left-1/2 right-1/2 bg-slate-300 rounded-xl text-slate-800 btn-shadow">
        <PagesSlider />
      </div>
    </div>
  );
}
