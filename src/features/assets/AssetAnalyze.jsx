import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

import ModalWindow from "../../ui/ModalWindow";
import Button from "../../ui/Button";

export default function AssetAnalyze() {
  const [isOpen, setIsOpen] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const video = document.createElement("video");
    video.src = "BoxBg1.mp4";
    video.onloadeddata = () => setBgLoaded(true);

    return () => {
      // Clean up video element to prevent memory leaks
      video.onloadeddata = null;
    };
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const content = (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
      consequatur nisi iure, adipisci cupiditate libero maiores placeat veniam
      eos maxime, doloremque quae quis est magnam veritatis ex repellendus
      pariatur eligendi.
    </p>
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center justify-center gap-6 w-[85%]  h-32 mx-auto overflow-hidden rounded-2xl "
    >
      {bgLoaded && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute object-cover w-full h-full rounded-2xl -z-10"
        >
          <source src="BoxBg1.mp4" type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-black/5 -z-10" />
      <p className="mt-6 text-xs text-slate-100">
        Get All Your Groups News in a Glans
      </p>

      <Button onClick={openModal}>Open</Button>

      <ModalWindow
        isOpen={isOpen}
        onRequestClose={closeModal}
        label="assets modal"
        content={content}
        onClose={closeModal}
      />
    </motion.div>
  );
}
