import React, { useEffect } from "react";
import GroupsItem from "./GroupsItem";
import AddGroup from "./AddGroup";
import { useDispatch, useSelector } from "react-redux";
import { userGroupsReceived } from "./groupSlice";

export default function Groups() {
  const { isGroupAdded, userGroups } = useSelector((store) => store.group);

  console.log(userGroups);

  const webapp = window.Telegram.WebApp;

  const dispatch = useDispatch();

  //*get group
  useEffect(() => {
    // Initialize Telegram WebApp
    webapp.ready();

    async function initializeAuth() {
      try {
        const data = await authenticateUser(webapp, "group");

        console.log("user Group:", data);

        dispatch(userGroupsReceived(data));
      } catch (error) {
        setAuthError(error.message);
      }
    }

    initializeAuth();
  }, []);

  // const isGroupAdded = true;

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
