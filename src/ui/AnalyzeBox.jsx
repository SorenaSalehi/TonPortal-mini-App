import React from "react";
import { motion } from "motion/react";

export default function AnalyzeBox({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center justify-center gap-6 w-[85%]  h-32 mx-auto overflow-hidden rounded-2xl "
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute object-cover w-[100%] h-[100%] rounded-2xl -z-10"
      >
        <source src="/BoxBg1.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/5 -z-10 " />
      {children}
    </motion.div>
  );
}
