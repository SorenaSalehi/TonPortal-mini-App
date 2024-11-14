import React, { Children } from "react";

export default function Button({ children, onClick, type }) {
  if (type === "asset")
    return (
      <button className="grid grid-cols-2" onClick={onClick}>
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
      className="px-4 py-2 text-sm font-extrabold rounded-lg bg-slate-100 text-slate-800 btn-shadow max-w-max"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
