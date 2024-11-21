import React from "react";
import GroupsItem from "./GroupsItem";
import AddGroup from "./AddGroup";
import { FaUserGroup } from "react-icons/fa6";

export default function Groups() {
  return (
    <>
      <div className="flex justify-between px-5 text-2xl font-semibold ">
        <p className="text-sm text-slate-100/75">Groups</p>
        <AddGroup />
      </div>
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
    </>
  );
}
