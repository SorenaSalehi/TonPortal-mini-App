import React, { lazy, useState } from "react";
import { FaUserGroup } from "react-icons/fa6";
import { motion } from "motion/react";

const ModalWindow = lazy(() => import("../../ui/ModalWindow"));
const Button = lazy(() => import("../../ui/Button"));

export default function GroupsItem() {
  const [isOpen, setIsOpen] = useState(false);

  const content = (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
      consequatur nisi iure, adipisci cupiditate libero maiores placeat veniam
      eos maxime, doloremque quae quis est magnam veritatis ex repellendus
      pariatur eligendi.
    </p>
  );

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
        className="flex justify-between px-4 py-6 cursor-pointer rounded-xl bg-blue-950/35 backdrop-blur-2xl  border-b-[0.01rem] border-slate-800"
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
        content={content}
        onClose={closeModal}
      />
    </>
  );
}
