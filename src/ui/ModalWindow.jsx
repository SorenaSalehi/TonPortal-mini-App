import { motion } from "motion/react";
import React from "react";
import ReactModal from "react-modal";

import AppName from "./AppName";
import Button from "./Button";

export default function ModalWindow({
  isOpen,
  label,
  onRequestClose,
  content,
  onClose,
  children,
  height = "30rem",
}) {
  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel={label}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(2px)",
          zIndex: "90",
        },
        content: {
          maxHeight: `${height}`,
          color: "rgb(241,245,279)",
          background: "linear-gradient(120deg, #13022abb, #111111, #0c021b86)",
          outline: "none",
          border: "none",
          borderRadius: "2rem",
          transition: "all 0.8s ease-in-out",
          overflow: "hidden",
        },
      }}
    >
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2.2rem",
          margin: "0 auto",
          width: "max-content",
          maxWidth: "20rem",
          height: "max-content",

          zIndex: "10",
        }}
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <AppName type="modal" />

        {label === "addGroup" || label === "walletModal" ? (
          <div className="flex flex-col gap-2">{children}</div>
        ) : (
          <main className="overflow-auto h-80 w-64 no-scrollbar border-y-[0.01rem] border-slate-200/35 rounded-lg text-pretty py-2 shadow-2xl backdrop-brightness-150 px-3">
            {content}
          </main>
        )}

        {label !== "walletModal" && <Button onClick={onClose}>Close</Button>}
      </motion.div>
    </ReactModal>
  );
}
