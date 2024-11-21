import React, { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "motion/react";

import {
  closeWalletSetting,
  walletModal,
  walletSettingClicked,
} from "./navbarSlice";

import { convertWalletAddress } from "../../utils/helpers";

export default function WalletOptions({ onClick }) {
  const { isWalletSettingOpen, userAddress } = useSelector(
    (store) => store.navbar
  );

  const dispatch = useDispatch();
  const walletAddress = convertWalletAddress(userAddress);

  function handleWalletSetting() {
    dispatch(walletSettingClicked());
    setTimeout(() => dispatch(closeWalletSetting()), 3000);
  }

  return (
    <div class="relative inline-block text-left cursor-pointer">
      <div
        onClick={handleWalletSetting}
        className="flex items-center gap-2 px-2 py-3 rounded-2xl bg-white/10"
      >
        <span className="text-sm">{walletAddress}</span>
        <div className="w-5 ">
          <img src="wallet1.png" />
        </div>
      </div>

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
            onClick={() => dispatch(walletModal())}
            transition={{ duration: 0.1, delay: 0.3, ease: "linear" }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            href="#"
            className="block px-3 py-2 text-xs font-semibold text-center cursor-pointer text-slate-900"
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
