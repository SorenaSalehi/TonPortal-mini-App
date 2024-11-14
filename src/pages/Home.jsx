import React from "react";
import AssetAnalyze from "../features/assets/AssetAnalyze";
import Assets from "../features/assets/Assets";

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <AssetAnalyze />
      <Assets />
    </div>
  );
}
