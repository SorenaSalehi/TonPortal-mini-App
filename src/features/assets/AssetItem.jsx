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

  return (
    <>
      <motion.div
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        onClick={openModal}
        className="border-[0.01rem] border-slate-700 rounded-xl p-2 flex justify-between primary-shadow cursor-pointer"
      >
        <div className="grid w-32 grid-cols-2 grid-rows-2 gap-2 cursor-pointer">
          <p className="w-12 row-span-2 overflow-hidden rounded-full">
            <img
              src={type === "ton" ? "ton_symbol.png" : icon}
              alt="icon"
              loading="lazy"
            />
          </p>
          <p className="font-semibold uppercase text-slate-300 justify-self-start">
            {type === "ton" ? "Toncoin" : symbol}
          </p>
          <p className="tracking-wider text-slate-100/55">
            {tokenPrice === 0
              ? `$0.00`
              : `$${
                  type === "ton"
                    ? tokenPrice
                    : parseFloat(tokenPrice).toFixed(10)
                }`}
          </p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <p>{type === "ton" ? balance : convertedBalance}</p>
          <p className="text-orange-300/85">
            {type === "ton" ? tonTotalPrice : jettonTotalPrice}
          </p>
        </div>
      </motion.div>

      <ModalWindow isOpen={isOpen} label="asset" onRequestClose={closeModal}>
        <h1>logo</h1>
        <main>context</main>
        <Button onClick={closeModal}>Close</Button>
      </ModalWindow>
    </>
  );
}
