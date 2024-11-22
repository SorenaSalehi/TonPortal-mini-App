import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

import Button from "../../ui/Button";
import ModalWindow from "../../ui/ModalWindow";
import { useSelector } from "react-redux";
import AnalyzeBox from "../../ui/AnalyzeBox";
import { useModal } from "../../hooks/useModal";

export default function GroupsAnalyzeBox() {
  const { isOpen, openModal, closeModal } = useModal();

  // const { isGroupAdded } = useSelector((store) => store.group);
  const isGroupAdded = true;

  const content = (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
      consequatur nisi iure, adipisci cupiditate libero maiores placeat veniam
      eos maxime, doloremque quae quis est magnam veritatis ex repellendus
      pariatur eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. Aliquam, consequatur nisi iure, adipisci cupiditate libero maiores
      placeat veniam eos maxime, doloremque quae quis est magnam veritatis ex
      repellendus pariatur eligendi.
    </p>
  );

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
            label="GroupsModal"
            content={content}
            onClose={closeModal}
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
