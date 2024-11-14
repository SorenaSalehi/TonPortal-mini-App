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
    <div className=" text-slate-100 flex flex-col justify-between items-center mx-auto w-9/12 h-32 bg-[url('/public/analyzeBg.jpg')]  p-1  rounded-lg overflow-hidden">
      
      <p className="mt-4 text-xs">Get All Your Assets News in a Glass</p>

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
