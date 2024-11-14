import React from "react";
import ReactModal from "react-modal";

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
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          zIndex: "100",
          color: "rgb(241,245,279)",
          background: "linear-gradient(120deg, #00000088, #0f2027, #203a4388)",
          outline: "none",
          border: "none",
          borderRadius: "2rem",

          transition: "all 0.8s ease-in-out",
        },
      }}
    >
      {children}
    </ReactModal>
  );
}
