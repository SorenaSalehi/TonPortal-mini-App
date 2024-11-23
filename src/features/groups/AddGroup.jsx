import React, { lazy, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaCopy } from "react-icons/fa";
import { MdGroupAdd } from "react-icons/md";
import { useModal } from "../../hooks/useModal";

const ModalWindow = lazy(() => import("../../ui/ModalWindow"));
const Button = lazy(() => import("../../ui/Button"));

export default function AddGroup() {
  const { isOpen, openModal, closeModal } = useModal();

  const botAddress = "@tonportalprobot";

  const copyToClipboard = async () => {
    closeModal();
    await navigator.clipboard.writeText(botAddress);
    toast.success("Address cpoied to Clipboard");
  };

  return (
    <>
      <Toaster />
      <Button onClick={openModal} textSize=" xl ">
        <div className="w-6">
          <img src="addGroup.png" loading="lazy" />
        </div>
      </Button>
      <ModalWindow
        isOpen={isOpen}
        onRequestClose={closeModal}
        label="addGroup"
        onClose={closeModal}
        height="18rem"
      >
        <p className="flex flex-col items-start px-4 py-2 text-center rounded-2xl backdrop-brightness-150 bg-white/10 my-7 ">
          Copy Robot Address,
          <br /> then Add it to Your Groups
        </p>

        <div className="px-3 rounded-2xl backdrop-brightness-150 bg-white/10">
          <button
            className="flex items-center gap-5 p-1"
            onClick={copyToClipboard}
          >
            a3s1ascasc3a51ac3a5c1
            <span className="text-sm text-green-500/55 animate-pulse">
              <FaCopy />
            </span>
          </button>
        </div>
      </ModalWindow>
    </>
  );
}
