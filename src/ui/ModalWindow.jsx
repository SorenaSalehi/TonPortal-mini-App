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
          background: "rgb(1,1,1,0.8)",
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
          gap: "0.2rem",
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
          <main className="w-[18rem] px-3 py-2 overflow-auto rounded-lg h-[25rem] text-pretty ">
            {content}
          </main>
        )}

        {/* {label !== "walletModal" && (
          <div className="mt-auto">
            <Button onClick={onClose}>Close</Button>
          </div>
        )} */}
      </motion.div>
    </ReactModal>
  );
}
