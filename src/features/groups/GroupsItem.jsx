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
        viewport={{ once: true }}
        onClick={openModal}
        className="flex justify-between px-4 py-5 font-semibold cursor-pointer bg-black/10 backdrop-brightness-150 rounded-xl text-slate-300"
      >
        <div className="flex items-baseline gap-2">
          <FaUserGroup className="text-2xl " />
          <p className="mb-auto capitalize">group name</p>
        </div>
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
