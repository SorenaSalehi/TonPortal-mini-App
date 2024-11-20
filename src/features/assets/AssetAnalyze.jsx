import React, { useState } from "react";
import { motion } from "motion/react";

import ModalWindow from "../../ui/ModalWindow";
import Button from "../../ui/Button";
import AppName from "../../ui/AppName";

export default function AssetAnalyze() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const content = (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
      consequatur nisi iure, adipisci cupiditate libero maiores placeat veniam
      eos maxime, doloremque quae quis est magnam veritatis ex repellendus
      pariatur eligendi.
    </p>
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className=" 0 flex flex-col justify-between items-center mx-auto w-9/12 h-32 bg-[url('/public/analyze4.jpg')] opacity-85 bg-contain   p-1  rounded-lg "
    >
      <p className="mt-4 text-xs font-semibold text-slate-300/75">
        Get All Your Assets News in a Glass
      </p>

      <Button onClick={openModal}>Open</Button>

      <ModalWindow
        isOpen={isOpen}
        onRequestClose={closeModal}
        label="assets modal"
        content={content}
        onClose={closeModal}
      />
    </motion.div>
  );
}
