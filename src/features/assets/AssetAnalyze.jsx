import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

import ModalWindow from "../../ui/ModalWindow";
import Button from "../../ui/Button";
import AnalyzeBox from "../../ui/AnalyzeBox";
import { useModal } from "../../hooks/useModal";

export default function AssetAnalyze() {
  const { isOpen, openModal, closeModal } = useModal();

  const content = (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
      consequatur nisi iure, adipisci cupiditate libero maiores placeat veniam
      eos maxime, doloremque quae quis est magnam veritatis ex repellendus
      pariatur eligendi.
    </p>
  );

  return (
    <AnalyzeBox>
      <p className="mt-6 text-xs text-slate-100">
        Get All Your Groups News in a Glans
      </p>

      <Button onClick={openModal}>Open</Button>

      <ModalWindow
        isOpen={isOpen}
        onRequestClose={closeModal}
        label="assetsModal"
        content={content}
        onClose={closeModal}
      />
    </AnalyzeBox>
  );
}
