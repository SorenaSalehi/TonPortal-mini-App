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
      className="relative flex flex-col items-center justify-between w-[65%]  h-32 p-1 mx-auto overflow-hidden rounded-lg text-slate-100"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute object-cover w-full h-full rounded-2xl -z-10"
      >
        <source src="box2.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/5 -z-10 backdrop-blur-[0.5px]" />
      <p className="mt-4 text-xs text-slate-300/55">
        Get All Your Groups
        <br /> News in a Glass
      </p>

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
