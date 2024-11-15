import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";

import PagesSlider from "../ui/PagesSlider";
import Navbar from "../ui/navbar/Navbar";

export default function AppLayout() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  return (
    <div className="box-border relative flex flex-col p-2 h-dvh w-dvw bg-black bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-900/50 via-black to-black text-slate-100 justify-evenly scroll-smooth">
      <Navbar />
      
      <main className="overflow-scroll no-scrollbar scroll-smooth">
        <Outlet />
      </main>

      <PagesSlider />
    </div>
  );
}
