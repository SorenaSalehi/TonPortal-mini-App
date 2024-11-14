import React, { useState } from "react";

import ModalWindow from "../../ui/ModalWindow";
import Button from "../../ui/Button";
import getTonData from "../../services/apiTon";



export default function AssetItem() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="border-[0.01rem] border-slate-700 rounded-xl p-2 flex justify-between primary-shadow">
        <Button type="asset" onClick={openModal}>
          <p className="row-span-full">🪙</p>
          <p>nickname</p>
          <p className="text-slate-100/55">name</p>
        </Button>
        <div>
          <p>$22.41</p>
          <p>3.32%</p>
        </div>
      </div>

      <ModalWindow isOpen={isOpen} label="asset" onRequestClose={closeModal}>
        <h1>logo</h1>
        <main>context</main>
        <Button onClick={closeModal}>Close</Button>
      </ModalWindow>
    </>
  );
}
