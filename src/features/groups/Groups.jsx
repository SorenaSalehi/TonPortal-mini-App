import React from "react";
import GroupsItem from "./GroupsItem";
import AddGroup from "./AddGroup";
import { useSelector } from "react-redux";

export default function Groups() {
  // const { isGroupAdded } = useSelector((store) => store.group);
  const isGroupAdded = true;

  return (
    <>
      <div className="flex items-center justify-between text-2xl font-semibold">
        {isGroupAdded && <p className="text-xs text-slate-100/55">GROUPS</p>}
        <AddGroup />
      </div>
      {isGroupAdded ? (
        <div className="flex flex-col gap-2 overflow-auto no-scrollbar">
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
      ) : (
        <div className="flex flex-col gap-2 overflow-auto no-scrollbar">
          <p>Get Start</p>
          <p>By Adding Group</p>
        </div>
      )}
    </>
  );
}
