import React, { lazy, useState } from "react";
import { FaUserGroup } from "react-icons/fa6";
import { motion } from "motion/react";

const ModalWindow = lazy(() => import("../../ui/ModalWindow"));
const Button = lazy(() => import("../../ui/Button"));

export default function GroupsItem() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileTap={{ scale: 0.9 }}
        onClick={openModal}
        className="border-[0.01rem] border-slate-700 rounded-xl px-4 py-6 flex justify-between primary-shadow cursor-pointer"
      >
        <div className="flex items-baseline gap-2">
          <FaUserGroup className="text-2xl" />
          <p className="mb-auto">group name</p>
        </div>
        <p className="text-rose-500">+99</p>
      </motion.div>

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
    </>
  );
}
