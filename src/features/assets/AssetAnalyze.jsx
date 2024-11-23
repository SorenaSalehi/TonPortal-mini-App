import React, { useEffect, useState } from "react";

import ModalWindow from "../../ui/ModalWindow";
import Button from "../../ui/Button";
import AnalyzeBox from "../../ui/AnalyzeBox";
import { useModal } from "../../hooks/useModal";
import { useDispatch, useSelector } from "react-redux";
import {
  allAssetsAnalyzeReceive,
  assetsAnalyzeLoadingAction,
  clearAssetsAnalyze,
} from "./assetsSlice";
import { getTokenAnalyze } from "../../services/apiTel";

export default function AssetAnalyze() {
  const { isOpen, openModal, closeModal } = useModal();

  const { allAssetsToken, allAssetsContent, assetsAnalyzeLoading } =
    useSelector((store) => store.asset);
  const webapp = window.Telegram.WebApp;

  const dispatch = useDispatch();
  //*get all analyze
  useEffect(() => {
    webapp.ready();
    //* when modal open
    async function getAllAssetsAnalyze() {
      try {
        dispatch(assetsAnalyzeLoadingAction());
        const data = await getTokenAnalyze(webapp, `${allAssetsToken}`);

        console.log("all token analyze:", data);

        if (data) dispatch(allAssetsAnalyzeReceive(data.data));
      } catch (error) {
        console.error(error.message);
      } finally {
        dispatch(clearAssetsAnalyze());
        dispatch(assetsAnalyzeLoadingAction());
      }
    }

    getAllAssetsAnalyze();

    //* when modal open
  }, [isOpen]);

  return (
    <AnalyzeBox>
      <p className="mt-6 text-xs text-slate-100">
        Get All Your Groups News in a Glans
      </p>

      <Button onClick={openModal}>Open</Button>

      <ModalWindow
        isOpen={isOpen}
        onRequestClose={closeModal}
        label="assets modal"
        content={allAssetsContent}
        onClose={closeModal}
        isDataLoading={assetsAnalyzeLoading}
      />
    </AnalyzeBox>
  );
}
