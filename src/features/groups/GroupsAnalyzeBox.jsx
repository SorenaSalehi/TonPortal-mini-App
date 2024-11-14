import React, { useState } from "react";
import ReactModal from "react-modal";
import Button from "../../ui/Button";
import ModalWindow from "../../ui/ModalWindow";

export default function GroupsAnalyzeBox() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className=" text-slate-100 flex flex-col justify-between items-center p-1 mx-auto w-9/12 h-32 bg-[url('/public/analyzeBg.jpg')] text-center  rounded-lg overflow-hidden">
      <p className="mt-4 text-xs">Get All Your Groups News in a Glass</p>

      <Button onClick={openModal}>Click</Button>

      <ModalWindow
        isOpen={isOpen}
        onRequestClose={closeModal}
        label="assets modal"
      >
        <h1>logo</h1>
        <main>context</main>
        <Button onClick={closeModal}>Close Modal</Button>
      </ModalWindow>
    </div>
  );
}
