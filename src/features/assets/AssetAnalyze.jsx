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

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className=" text-slate-100 flex flex-col justify-between items-center mx-auto w-9/12 h-32 bg-[url('/public/analyze4.jpg')] opacity-85 bg-contain   p-1  rounded-lg overflow-hidden"
    >
      <p className="mt-4 text-xs">Get All Your Assets News in a Glass</p>

      <Button onClick={openModal}>Open</Button>

      <ModalWindow
        isOpen={isOpen}
        onRequestClose={closeModal}
        label="assets modal"
      >
        <div className="flex flex-col items-center justify-between max-w-24">
          <main className="w-[15rem] border-y-[0.01rem] border-slate-500/75 py-1  mb-2 overflow-scroll text-wrap max-h-44 no-scrollbar ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            nostrum facilis quis provident iste culpa maxime ea pariatur
            corporis, dolores ab, cum vitae laudantium, saepe voluptatum at hic.
            Necessitatibus, molestias?
          </main>
          <Button onClick={closeModal}>Close</Button>
        </div>
      </ModalWindow>
    </motion.div>
  );
}
