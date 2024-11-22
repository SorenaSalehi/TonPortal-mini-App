import React, { lazy } from "react";

const Assets = lazy(() => import("../features/assets/Assets"));
const AssetAnalyze = lazy(() => import("../features/assets/AssetAnalyze"));

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <AssetAnalyze />
      <Assets />
    </div>
  );
}
