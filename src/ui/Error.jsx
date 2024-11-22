import React from "react";

export default function Error({ message }) {
  return (
    <div className="flex flex-col items-center rounded-lg border-2 border-slate-300/25 py-2 px-3  text-slate-100   bg-black bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-900/35 via-black to-black">
      <p className="pt-2 font-extrabold animate-pulse text-rose-600/85">
        Something Went Wrong!!
      </p>
      <p className="py-10 mb-auto font-extrabold text-center text-wrap text-slate-300">
        {message}
      </p>
    </div>
  );
}
