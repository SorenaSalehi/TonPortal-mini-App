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
    <div className=" text-slate-100 flex flex-col justify-between items-center mx-auto w-9/12 h-32 bg-[url('/public/groups5.jpg')] bg-black/85 bg-contain bg-no-repeat  p-1  rounded-lg overflow-hidden">
      <p className="mt-4 text-xs">Get All Your Groups News in a Glass</p>

      <Button onClick={openModal}>Check Out</Button>

      <ModalWindow
        isOpen={isOpen}
        onRequestClose={closeModal}
        label="assets modal"
      >
        <div className="flex flex-col items-center justify-between max-w-24">
          <main className="w-[22rem] border-y-[0.01rem] border-slate-500/75 py-1 mb-2 overflow-scroll text-wrap max-h-48 no-scrollbar ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            nostrum facilis quis provident iste culpa maxime ea pariatur
            corporis, dolores ab, cum vitae laudantium, saepe voluptatum at hic.
            Necessitatibus, molestias?
          </main>
          <Button onClick={closeModal}>Close</Button>
        </div>
      </ModalWindow>
    </div>
  );
}
