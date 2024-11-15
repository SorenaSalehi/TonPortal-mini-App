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
        label="add group modal"
      >
        <h1>logo</h1>
        <div className="flex flex-col items-start gap-2 px-4 py-2 border-2 rounded-lg border-indigo-950/85">
          <p className="text-rose-400/85 animate-pulse">Prompt</p>
          <p>Copy Robot Address , then Add it to Groups</p>
        </div>

        <div className="px-3 py-2 rounded-lg bg-indigo-900/35">
          <button className="flex items-center gap-2" onClick={copyToClipboard}>
            a3s1ascasc3a51ac3a5c1
            <span className="text-sm text-green-500/55 animate-pulse">
              <FaCopy />
            </span>
          </button>
        </div>
        <Button onClick={handleCloseModal}>Close</Button>
      </ModalWindow>
    </>
  );
}
