import React, { lazy, useState } from "react";
import { FaUserGroup } from "react-icons/fa6";
import { motion } from "motion/react";
import { useModal } from "../../hooks/useModal";

const ModalWindow = lazy(() => import("../../ui/ModalWindow"));

export default function GroupsItem({ name, img }) {
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
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileTap={{ scale: 0.9 }}
        viewport={{ once: true }}
        onClick={openModal}
        className="flex justify-between px-4 py-3 font-semibold cursor-pointer bg-black/10 backdrop-brightness-150 rounded-xl text-slate-300"
      >
        <div className="flex items-center gap-2">
          <div
            className={`${
              img ? "" : "opacity-50"
            }overflow-hidden rounded-full w-14 h-14`}
          >
            <img src={img ? img : "/groupImg.webp"} />
          </div>
          <p className="text-xl capitalize">{name}</p>
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
