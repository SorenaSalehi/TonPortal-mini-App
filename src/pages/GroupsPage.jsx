import React from "react";
import GroupsAnalyzeBox from "../features/groups/GroupsAnalyzeBox";
import Groups from "../features/groups/Groups";

export default function GroupsPage() {
  return (
    <div className="flex flex-col gap-2">
      <GroupsAnalyzeBox />
      <Groups />
    </div>
  );
}
