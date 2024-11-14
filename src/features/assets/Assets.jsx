import React from "react";
import GainerItem from "./AssetItem";

export default function Assets() {
  return (
    <>
      <p className="font-semibold">🔝 Assets</p>
      <div className=" flex flex-col gap-2 overflow-scroll no-scrollbar">
        <GainerItem />
        <GainerItem />
        <GainerItem />
        <GainerItem />
        <GainerItem />
        <GainerItem />
        <GainerItem />
      </div>
    </>
  );
}
