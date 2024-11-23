import React, { useEffect, useState } from "react";

import Button from "../../ui/Button";
import ModalWindow from "../../ui/ModalWindow";
import { useDispatch, useSelector } from "react-redux";
import AnalyzeBox from "../../ui/AnalyzeBox";
import { useModal } from "../../hooks/useModal";
import {
  allAnalyzeReceive,
  analyzeLoadingAction,
  clearAnalyze,
} from "./groupSlice";
import { authenticateUser } from "../../services/apiTel";

export default function GroupsAnalyzeBox() {
  const { isOpen, openModal, closeModal } = useModal();

  const { analyzeLoading, allGroupsId, allGroupsContent } = useSelector(
    (store) => store.group
  );
  const isGroupAdded = true;

  const dispatch = useDispatch();



  return (
    <AnalyzeBox>
      {isGroupAdded ? (
        <>
          <p className="mt-4 text-xs text-slate-300/55">
            Get All Your Groups
            <br /> News in a Glass
          </p>

          <Button onClick={openModal}>Check Out</Button>

          <ModalWindow
            isOpen={isOpen}
            onRequestClose={closeModal}
            label="assets modal"
            content={allGroupsContent}
            onClose={closeModal}
            isDataLoading={analyzeLoading}
          />
        </>
      ) : (
        <p className="text-lg text-center text-slate-300/55">
          Inactive
          <br />
          Unless There is a Group!
        </p>
      )}
    </AnalyzeBox>
  );
}
