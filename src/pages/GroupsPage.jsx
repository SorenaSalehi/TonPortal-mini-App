import React, { lazy } from "react";

const Groups = lazy(() => import("../features/groups/Groups"));
const GroupsAnalyzeBox = lazy(() =>
  import("../features/groups/GroupsAnalyzeBox")
);

export default function GroupsPage() {
  return (
    <div className="flex flex-col gap-4">
      <GroupsAnalyzeBox />
      <Groups />
    </div>
  );
}
