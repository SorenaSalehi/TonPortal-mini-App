import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import ReactModal from "react-modal";

import AppName from "./AppName";
import Button from "./Button";
import { FaChevronDown } from "react-icons/fa";

export default function ModalWindow({
  isOpen,
  label,
  onRequestClose,
  content,

  children,
  height = "30rem",
}) {
  const [isScrollable, setIsScrollable] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const checkScrollable = () => {
      if (contentRef.current) {
        setIsScrollable(
          contentRef.current.scrollHeight > contentRef.current.clientHeight
        );
      }
    };

    // Add a small timeout to ensure content is fully rendered
    const timeoutId = setTimeout(checkScrollable, 100);

    return () => clearTimeout(timeoutId);
  }, [isOpen, content]);

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
          <div className="relative">
            <main
              ref={contentRef}
              className="w-[18rem] px-3 py-2 overflow-auto rounded-lg h-[25rem] text-pretty"
            >
              {content}
              {isScrollable && (
                <div className="absolute p-1 rounded-full right-2 bg-white/15 bottom-2 animate-bounce">
                  <FaChevronDown className="text-blue-500 " />
                </div>
              )}
            </main>
          </div>
        )}
      </motion.div>
    </ReactModal>
  );
}
