import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import ReactModal from "react-modal";

import AppName from "./AppName";
import Button from "./Button";
import { FaChevronDown } from "react-icons/fa";
import Loader from "./Loader";

export default function ModalWindow({
  isDataLoading,
  isOpen,
  label,
  onRequestClose,
  content,
  children,
  height = "30rem",
}) {
  const [isScrollable, setIsScrollable] = useState(false);
  const contentRef = useRef(null);
  const webapp = window.Telegram.Webapp;

  useEffect(() => {
    webapp.ready();

    async function getTokenAnalyze(webapp, token) {
      try {
        const response = await fetch(
          `https://463c-2a0e-97c0-3e3-3f6-00-1.ngrok-free.app/api/v2/analysis/groups/id=-4513586841`,
          {
            method: "GET",
            headers: {
              authorization: webapp.initData,
              "ngrok-skip-browser-warning": "true",
            },
          }
        );

        if (!response.ok) throw new Error("no response");

        const data = await response.json();

        if (data.status !== "success")
          throw new Error("token data could not receive!!");

        return data;
      } catch (error) {
        console.error("Token Analyze failed:", error);
      }
    }
    getTokenAnalyze();
  }, []);

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
              {/* after loading display the analyze */}
              {isDataLoading ? <Loader /> : content}

              {/* show to user for scroll to see more content  */}
              {isScrollable && (
                <div className="absolute p-1 rounded-full right-2 bg-white/15 bottom-2 ">
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
