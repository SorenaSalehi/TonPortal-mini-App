import React from "react";

export default function Error() {
  return (
    <div className="flex items-center rounded-lg border-2 border-slate-300/25 py-2 px-3  text-slate-100   bg-black bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-900/35 via-black to-black">
      <p className="mb-auto text-center text-rose-500/85">
        Something Went Wrong <br /> Please check Your Connection or Refresh The
        page
      </p>
    </div>
  );
}
