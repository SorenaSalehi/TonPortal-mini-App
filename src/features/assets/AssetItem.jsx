import React, { lazy, useState } from "react";
import { motion } from "motion/react";

const ModalWindow = lazy(() => import("../../ui/ModalWindow"));
const Button = lazy(() => import("../../ui/Button"));

import {
  calcJettonTotalPrice,
  convertJettonBalance,
  sortJettonsByTotalPrice,
} from "../../utils/helpers";

export default function AssetItem({
  type,
  symbol,
  icon,
  tokenPrice,
  balance,
  decimals,
}) {
  //modal state
  const [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const tonTotalPrice =
    type === "ton" && balance && tokenPrice
      ? `$${(balance * tokenPrice).toFixed(2)}`
      : "Uncertain!";

  const convertedBalance = convertJettonBalance(+balance, decimals);

  const jettonTotalPrice =
    type !== "ton" && balance && tokenPrice
      ? `$${calcJettonTotalPrice(convertedBalance, tokenPrice)}`
      : "0.00";

  const Icon = type === "ton" ? "ton_symbol.png" : icon;
  const Symbol = type === "ton" ? "Toncoin" : symbol;
  const TokenPrice =
    tokenPrice === 0
      ? ``
      : `$${type === "ton" ? tokenPrice : parseFloat(tokenPrice).toFixed(10)}`;

  const Balance = type === "ton" ? balance : convertedBalance;
  const TotalPrice = type === "ton" ? tonTotalPrice : jettonTotalPrice;

  const content = (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
      consequatur nisi iure, adipisci cupiditate libero maiores placeat veniam
      eos maxime, doloremque quae quis est magnam veritatis ex repellendus
      pariatur eligendi.
    </p>
  );

  return (
    <>
      <motion.div
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        onClick={openModal}
        className="flex justify-between p-2 cursor-pointer  bg-black/10 backdrop-brightness-150 rounded-xl"
      >
        <div className="grid w-32 grid-cols-2 grid-rows-2 gap-2 cursor-pointer">
          <p className="w-12 row-span-2 overflow-hidden rounded-full">
            <img src={Icon} alt="icon" loading="lazy" />
          </p>
          <p className="font-semibold uppercase text-slate-300 justify-self-start">
            {Symbol}
          </p>
          <p className="tracking-wider text-slate-100/55">{TokenPrice}</p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-1">
            <span className="text-xs text-slate-200/25">Balance</span>
            <p>{Balance}</p>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-slate-200/25">Total</span>
            <p className="text-orange-300/85">{TotalPrice}</p>
          </div>
        </div>
      </motion.div>

      <ModalWindow
        isOpen={isOpen}
        onRequestClose={closeModal}
        label="assets modal"
        content={content}
        onClose={closeModal}
      />
    </>
  );
}
