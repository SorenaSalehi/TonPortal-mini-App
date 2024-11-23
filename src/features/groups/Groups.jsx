import React, { useEffect } from "react";
import GroupsItem from "./GroupsItem";
import AddGroup from "./AddGroup";
import { useDispatch, useSelector } from "react-redux";
import {
  groupLoadingAction,
  receiveAllGroupsAll,
  userGroupsReceived,
} from "./groupSlice";
import { authenticateUser } from "../../services/apiTel";
import Loader from "../../ui/Loader";
import { getAllUserGroupsId } from "../../utils/helpers";
import { useModal } from "../../hooks/useModal";
import ModalWindow from "../../ui/ModalWindow";
import { webapp } from "../../App";

export default function Groups() {
  const {
    isGroupAdded,
    userGroups,
    groupLoading,
    singleAnalyzeContent,
    analyzeLoading,
  } = useSelector((store) => store.group);
  const { isOpen, openModal, closeModal } = useModal();

  const dispatch = useDispatch();

  //*get group
  useEffect(() => {
    async function getUserGroups() {
      try {
        dispatch(groupLoadingAction());
        const data = await authenticateUser(webapp, "group");

        if (data) {
          dispatch(userGroupsReceived(data.data));

          //* for analyze all groups
          const allIds = getAllUserGroupsId(data.data);
          dispatch(receiveAllGroupsAll(allIds));
        }
      } catch (error) {
        console.error(error.message);
      } finally {
        dispatch(groupLoadingAction());
      }
    }

    getUserGroups();
  }, []);

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
        {userGroups?.map((group) => (
          <GroupsItem
            name={group.groupName}
            img={group.PhotoUrl}
            id={group.groupId}
            openModal={openModal}
          />
        ))}
      </div>
      <ModalWindow
        isOpen={isOpen}
        onRequestClose={closeModal}
        label="assets modal"
        content={singleAnalyzeContent}
        onClose={closeModal}
        isDataLoading={analyzeLoading}
      />
    </>
  );
}
