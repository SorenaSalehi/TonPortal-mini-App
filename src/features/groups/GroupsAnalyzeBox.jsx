import React, { useState } from "react";
import { motion } from "motion/react";

import Button from "../../ui/Button";
import ModalWindow from "../../ui/ModalWindow";

export default function GroupsAnalyzeBox() {
  const [isOpen, setIsOpen] = useState(false);

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

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className=" text-slate-100 flex flex-col justify-between items-center mx-auto w-9/12 h-32 bg-[url('/public/groups5.jpg')] bg-black/85 bg-contain bg-no-repeat  p-1  rounded-lg overflow-hidden"
    >
      <p className="mt-4 text-xs">Get All Your Groups News in a Glass</p>

      <Button onClick={openModal}>Check Out</Button>

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
