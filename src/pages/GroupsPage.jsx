import React, { lazy } from "react";
import GroupsAnalyzeBox from "../features/groups/GroupsAnalyzeBox";
const Groups = lazy(() => import("../features/groups/Groups"));

export default function GroupsPage() {
  return (
    <div className="flex flex-col gap-2">
      <GroupsAnalyzeBox />
      <Groups />
    </div>
  );
}
