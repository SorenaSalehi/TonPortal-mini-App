import React, { Children } from "react";

export default function Button({ children, onClick, type }) {
  if (type === "asset")
    return (
      <button
        className="grid w-32 grid-cols-2 grid-rows-2 gap-2 cursor-pointer"
        onClick={onClick}
      >
        {children}
      </button>
    );

  if (type === "group")
    return (
      <button className="flex items-baseline gap-2" onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button
      className="flex items-center gap-2 px-4 py-2 text-sm font-extrabold uppercase rounded-lg bg-slate-100 text-slate-800 btn-shadow max-w-max"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
