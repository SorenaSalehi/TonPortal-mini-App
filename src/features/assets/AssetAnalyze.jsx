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
import { webapp } from "../../App";

export default function AssetAnalyze() {
  const { isOpen, openModal, closeModal } = useModal();

  const { allAssetsToken, allAssetsContent, assetsAnalyzeLoading } =
    useSelector((store) => store.asset);

  const dispatch = useDispatch();

  async function handleClick() {
    try {
      dispatch(assetsAnalyzeLoadingAction());
      openModal();

      // Make the API call
      const data = await getTokenAnalyze(webapp, allAssetsToken);
      console.log("all assets:", data);

      if (data?.status === "success") {
        dispatch(allAssetsAnalyzeReceive(data?.data));
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      dispatch(assetsAnalyzeLoadingAction());
    }
  }

  return (
    <AnalyzeBox>
      <p className="mt-6 text-xs text-slate-100">
        Get All Your Groups News in a Glans
      </p>

      <Button onClick={handleClick}>Open</Button>

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
