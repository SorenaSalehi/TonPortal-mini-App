import React from "react";
import AppName from "./AppName";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-dvh text-slate-100 ">
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
