import React, { Children } from "react";
import { motion } from "motion/react";

export default function Button({ children, onClick, type }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="flex items-center gap-2 px-3 py-2 text-xs font-extrabold uppercase rounded-2xl bg-white/20 text-slate-200 btn-shadow max-w-max"
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
