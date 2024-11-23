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
  const webapp = window.Telegram.WebApp;

  const dispatch = useDispatch();

  //*get all analyze
  useEffect(() => {
    webapp.ready();

    //* when modal open
    async function getAllGroupsAnalyze() {
      try {
        dispatch(analyzeLoadingAction());
        const data = await authenticateUser(
          webapp,
          `analysis/groups/id=${allGroupsId}`
        );

        console.log("all analyze:", data);

        if (data) dispatch(allAnalyzeReceive(data.data));
      } catch (error) {
        console.error(error.message);
      } finally {
        dispatch(clearAnalyze());
        dispatch(analyzeLoadingAction());
      }
    }

    getAllGroupsAnalyze();

    //* when modal open
  }, [isOpen]);

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
