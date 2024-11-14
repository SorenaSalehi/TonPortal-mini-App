import React, { useState } from "react";
import { FaUserGroup } from "react-icons/fa6";
import Button from "../../ui/Button";
import ModalWindow from "../../ui/ModalWindow";

export default function GroupsItem() {
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
        <Button type="group" onClick={openModal}>
          <FaUserGroup className="text-2xl" />
          <p className="mb-auto">group name</p>
        </Button>
        <p className="text-rose-500">+99</p>
      </div>

      <ModalWindow isOpen={isOpen} label="group" onRequestClose={closeModal}>
        <h1>logo</h1>
        <main>context</main>
        <Button onClick={closeModal}>Close</Button>
      </ModalWindow>
    </>
  );
}
