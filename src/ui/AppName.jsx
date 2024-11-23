import React from "react";

export default function AppName({ type }) {
  return (
    <p className="flex items-center gap-1 text-2xl font-extrabold tracking-widest text-transparent uppercase bg-gradient-to-b from-indigo-800 to-purple-900 bg-clip-text">
      <div className={type === "modal" ? "w-4" : `w-8`}>
        <img src="Webp.png" className="w-full h-auto" />
      </div>
      <p className={type === "modal" ? "text-xs" : `text-lg`}>ortal</p>
    </p>
  );
}
