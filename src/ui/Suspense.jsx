import React from "react";
import AppName from "./AppName";

export default function Suspense() {
  return (
    <div className="flex flex-col items-center justify-center bg-color h-dvh text-slate-100">
      <div className="w-24 text-wrap animate-pulse">
        <img src="Webp.png" />
      </div>
    </div>
  );
}
