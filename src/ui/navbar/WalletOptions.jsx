import React, { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "motion/react";

import { closeWalletSetting, walletSettingClicked } from "./navbarSlice";

export default function WalletOptions({ onClick }) {
  const { isWalletSettingOpen } = useSelector((store) => store.navbar);
  const dispatch = useDispatch();

  function handleWalletSetting() {
    dispatch(walletSettingClicked());
    setTimeout(() => dispatch(closeWalletSetting()), 3000);
  }

  return (
    <div class="relative inline-block text-left ">
      <motion.button
        onClick={handleWalletSetting}
        type="button"
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md  p-1 text-sm font-semibold text-stone-300 shadow-sm hover:text-lg transition-all delay-500"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        <SlOptionsVertical />
      </motion.button>

      <div
        onClick={onClick}
        className={`${
          isWalletSettingOpen ? "absolute" : "hidden"
        } right-0 z-10 mt-2 w-44 origin-top-right rounded-md transition-all duration-500 delay-700 bg-slate-200/85 shadow-lg ring-1 ring-black/5 focus:outline-none`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1"
      >
        <motion.ul role="menu">
          <motion.li
            transition={{ duration: 0.2, delay: 1, ease: "linear" }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            href="#"
            className="block px-3 py-2 text-xs font-semibold text-center text-slate-900"
            role="menuitem"
            tabindex="-1"
            id="menu-item-0"
          >
            Disconnect Wallet
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
}
