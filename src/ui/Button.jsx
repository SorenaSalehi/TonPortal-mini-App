import React, { Children } from "react";
import { motion } from "motion/react";

export default function Button({ children, onClick, type }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="flex items-center gap-2 px-4 py-2 text-xs font-extrabold uppercase rounded-lg bg-slate-100 text-slate-800 btn-shadow max-w-max"
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
  
}
