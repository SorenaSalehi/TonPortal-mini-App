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
        onClick={openModal}
        className="border-[0.01rem] border-slate-700 rounded-xl p-2 flex justify-between primary-shadow cursor-pointer"
      >
        <div className="flex items-baseline gap-2">
          <FaUserGroup className="text-2xl" />
          <p className="mb-auto">group name</p>
        </div>
        <p className="text-rose-500">+99</p>
      </motion.div>

      <ModalWindow isOpen={isOpen} label="group" onRequestClose={closeModal}>
        <h1>logo</h1>
        <main>context</main>
        <Button onClick={closeModal}>Close</Button>
      </ModalWindow>
    </>
  );
}
