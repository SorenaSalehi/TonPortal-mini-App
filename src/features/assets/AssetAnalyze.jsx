import React, { useState } from "react";
import ReactModal from "react-modal";
import ModalWindow from "../../ui/ModalWindow";
import Button from "../../ui/Button";

export default function AssetAnalyze() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className=" text-slate-100 flex flex-col justify-between items-center mx-auto w-9/12 h-32 bg-[url('/public/analyze4.jpg')] opacity-85 bg-contain   p-1  rounded-lg overflow-hidden">
      <p className="mt-4 text-xs">Get All Your Assets News in a Glass</p>

      <Button onClick={openModal}>Open</Button>

      <ModalWindow
        isOpen={isOpen}
        onRequestClose={closeModal}
        label="assets modal"
      >
        <h1>logo</h1>
        <main>context</main>
        <Button onClick={closeModal}>Close</Button>
      </ModalWindow>
    </div>
  );
}
