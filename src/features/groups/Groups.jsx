import React, { useEffect } from "react";
import GroupsItem from "./GroupsItem";
import AddGroup from "./AddGroup";
import { useDispatch, useSelector } from "react-redux";
import {
  analyzeLoadingAction,
  clearAnalyze,
  groupLoadingAction,
  singleAnalyzeReceive,
  userGroupsReceived,
} from "./groupSlice";
import { authenticateUser } from "../../services/apiTel";
import Loader from "../../ui/Loader";

// const groups = [
//   {
//     groupId: -4591122303,
//     PhotoUrl:
//       "https://api.telegram.org/file/bot7562008800:AAGnJiP2Hz23YEA7nPbwQ1LW7OQGKbw3qkk/profile_photos/file_4.jpg",
//     groupName: "بات خونه",
//   },
//   {
//     groupId: -4513586841,
//     PhotoUrl:
//       "https://api.telegram.org/file/bot7562008800:AAGnJiP2Hz23YEA7nPbwQ1LW7OQGKbw3qkk/profile_photos/file_5.jpg",
//     groupName: "بات مات",
//   },
// ];

export default function Groups() {
  const { isGroupAdded, userGroups, groupLoading, singleAnalyzeId } =
    useSelector((store) => store.group);

  console.log(userGroups);

  const webapp = window.Telegram.WebApp;

  const dispatch = useDispatch();

  //*get group
  useEffect(() => {
    // Initialize Telegram WebApp
    webapp.ready();

    async function getUserGroups() {
      try {
        dispatch(groupLoadingAction());
        const data = await authenticateUser(webapp, "group");

        console.log("user Group:", data);

        dispatch(userGroupsReceived(data.data));
      } catch (error) {
        console.error(error.message);
      } finally {
        dispatch(groupLoadingAction());
      }
    }

    getUserGroups();
  }, []);
  console.log(singleAnalyzeId);
  //*get single analyze
  useEffect(() => {
    // Initialize Telegram WebApp
    webapp.ready();

    async function getSingleAnalyze() {
      try {
        dispatch(analyzeLoadingAction());
        const data = await authenticateUser(
          webapp,
          `groups/id=${singleAnalyzeId}`
        );

        console.log("single analyze:", data);

        dispatch(singleAnalyzeReceive(data.data));
      } catch (error) {
        console.error(error.message);
      } finally {
        // dispatch(clearAnalyze());
        dispatch(analyzeLoadingAction());
      }
    }

    getSingleAnalyze();
  }, [singleAnalyzeId]);
  // const isGroupAdded = true;

  if (!isGroupAdded)
    return (
      <div className="flex flex-col gap-2 overflow-auto no-scrollbar">
        <p>Get Start</p>
        <p>By Adding Group</p>
      </div>
    );

  if (groupLoading) return <Loader />;

  return (
    <>
      <div className="flex items-center justify-between text-2xl font-semibold">
        {isGroupAdded && <p className="text-xs text-slate-100/55">GROUPS</p>}
        <AddGroup />
      </div>

      <div className="flex flex-col gap-2 overflow-auto no-scrollbar">
        {userGroups.map((group) => (
          <GroupsItem
            name={group.groupName}
            img={group.PhotoUrl}
            id={group.groupId}
          />
        ))}
        <GroupsItem
          id={"-4513586841"}
          img={
            "https://api.telegram.org/file/bot7562008800:AAGnJiP2Hz23YEA7nPbwQ1LW7OQGKbw3qkk/profile_photos/file_2.jpg"
          }
        />
        {/* <GroupsItem />
        <GroupsItem />
        <GroupsItem />
        <GroupsItem />
        <GroupsItem />
        <GroupsItem />
        <GroupsItem />
        <GroupsItem />
        <GroupsItem /> */}
      </div>
    </>
  );
}
