import React, { lazy, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

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
        <main>Add bot to group for starting</main>
        <div className="text-center">
          <h1 role="button" onClick={copyToClipboard}>
            a3s1ascasc3a51ac3a5c1
          </h1>
          <p className="text-sm text-slate-100/75">copy Address</p>
        </div>
        <Button onClick={handleCloseModal}>Close</Button>
      </ModalWindow>
    </>
  );
}
