import React, { Children } from "react";
import { motion } from "motion/react";

export default function Button({ children, onClick, textSize = " text-xs " }) {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`flex items-center gap-2 px-3 py-2 ${textSize}font-extrabold uppercase rounded-md bg-white/20 text-slate-200 btn-shadow max-w-max`}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );
}
