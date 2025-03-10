import React from "react";

import AppName from "../ui/AppName";

export default function NotMobileUser() {
  return (
    <div className="flex flex-col gap-10 justify-start items-center bg-black bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-900/35 via-black to-black text-slate-200 h-dvh p-4">
      <AppName />
      <div className="flex flex-col items-start gap-2 px-4 py-2 border-2 rounded-lg border-indigo-950/85">
        <p className="text-rose-400/85">Prompt</p>
        <h1 className="">
          Unfortunately, Our Services are ONLY for Mobile Users.
          <span className="text-slate-400">We Are Waiting You there😉</span>
        </h1>
      </div>
    </div>
  );
}
