import React, { Children } from "react";

export default function Button({ children, onClick, type }) {
  return (
    <button
      className="flex items-center gap-2 px-4 py-2 text-xs font-extrabold uppercase rounded-lg bg-slate-100 text-slate-800 btn-shadow max-w-max"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
