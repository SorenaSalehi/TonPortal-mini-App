import { motion } from "motion/react";
import React from "react";
import ReactModal from "react-modal";

import AppName from "./AppName";

export default function ModalWindow({
  isOpen,
  label,
  onRequestClose,
  children,
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
          maxHeight: "20rem",
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
          margin: "0 auto",
          width: "max-content",

          height: "max-content",

          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
          alignItems: "center",
          zIndex: "10",
        }}
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <AppName />
        {children}
      </motion.div>
    </ReactModal>
  );
}
