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
          margin: "0 auto",
          width: "max-content",
          minWidth: "20rem",
          height: "max-content",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          gap: "2rem",
          alignItems: "center",
          zIndex: "100",
          color: "rgb(241,245,279)",
          background: "linear-gradient(120deg, #13022abb, #111111, #0c021b86)",
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
