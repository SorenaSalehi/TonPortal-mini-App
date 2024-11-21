import React, { lazy, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaCopy } from "react-icons/fa";

const ModalWindow = lazy(() => import("../../ui/ModalWindow"));
const Button = lazy(() => import("../../ui/Button"));

export default function AddGroup() {
  const [isOpen, setIsOpen] = useState(false);

  const botAddress = "a3s1ascasc3a51ac3a5c1";

  const copyToClipboard = async () => {
    setIsOpen(false);
    await navigator.clipboard.writeText(botAddress);
    toast.success("Address cpoied to Clipboard");
  };

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Toaster />
      <Button onClick={handleOpenModal}>
        <AiOutlineUsergroupAdd />
      </Button>
      <ModalWindow
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        label="addGroup"
        onClose={handleCloseModal}
        height="18rem"
      >
        <p className="flex flex-col items-start px-3 py-2 border-2 rounded-lg my-7 border-indigo-950/85">
          Copy Robot Address,
          <br /> then Add it to Your Groups
        </p>

        <div className="px-3 rounded-lg bg-indigo-900/35">
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
