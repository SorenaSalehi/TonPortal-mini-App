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
      <div className="flex flex-col gap-1 px-4 py-3 overflow-auto rounded-lg bg-black/10 backdrop-brightness-150 no-scrollbar">
        <div className="border-[0.01rem] border-slate-700 rounded-xl px-4 py-6 flex justify-between  cursor-pointer">
          <div className="flex items-baseline gap-2">
            <FaUserGroup className="text-2xl" />
            <p className="mb-auto">group name</p>
          </div>
        </div>
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
