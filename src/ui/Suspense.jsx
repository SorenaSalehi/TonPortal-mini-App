import React from "react";
import AppName from "./AppName";

export default function Suspense() {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-800 h-dvh text-slate-100">
      <AppName />
      <div className="loader">
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__ball"></div>
      </div>
    </div>
  );
}
