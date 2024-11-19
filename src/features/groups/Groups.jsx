import React from "react";
import GroupsItem from "./GroupsItem";
import AddGroup from "./AddGroup";

export default function Groups() {
  return (
    <>
      <div className="flex justify-between text-2xl font-semibold backdrop-blur-lg">
        <p className="text-sm text-slate-100/75">Groups</p>
        <AddGroup />
      </div>
      <div className="flex flex-col gap-2 overflow-scroll no-scrollbar">
        <GroupsItem />
        <GroupsItem />
        <GroupsItem />
        <GroupsItem />
        <GroupsItem />
        <GroupsItem />
        <GroupsItem />
        <GroupsItem />
        <GroupsItem />
      </div>
    </>
  );
}
