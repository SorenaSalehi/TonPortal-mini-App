import React, { lazy } from "react";
import AssetAnalyze from "../features/assets/AssetAnalyze";
const Assets = lazy(() => import("../features/assets/Assets"));

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <AssetAnalyze />
      <Assets />
    </div>
  );
}
