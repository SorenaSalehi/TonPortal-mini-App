import React, { lazy, useState } from "react";

const ModalWindow = lazy(() => import("../../ui/ModalWindow"));
const Button = lazy(() => import("../../ui/Button"));

import {
  calcJettonTotalPrice,
  convertJettonBalance,
} from "../../utils/helpers";

export default function AssetItem({
  type,
  symbol,
  icon,
  tokenPrice,
  balance,
  decimals,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const tonTotalPrice =
    type === "ton" && balance && tokenPrice
      ? `$${(balance * tokenPrice).toFixed(2)}`
      : "Uncertain!";

  const convertedBalance = convertJettonBalance(+balance, decimals);

  const jettonTotalPrice =
    type !== "ton" && balance && tokenPrice
      ? `$${calcJettonTotalPrice(convertedBalance, tokenPrice)}`
      : "0.00";

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="border-[0.01rem] border-slate-700 rounded-xl p-2 flex justify-between primary-shadow">
        <Button type="asset" onClick={openModal}>
          <p className="w-12 row-span-2 overflow-hidden rounded-full">
            <img
              src={type === "ton" ? "ton_symbol.png" : icon}
              alt="icon"
              loading="lazy"
              className="animate-pulse"
            />
          </p>
          <p className="justify-self-start">
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
        </Button>
        <div className="flex flex-col items-end gap-2">
          <p>{type === "ton" ? balance : convertedBalance}</p>
          <p>{type === "ton" ? tonTotalPrice : jettonTotalPrice}</p>
        </div>
      </div>

      <ModalWindow isOpen={isOpen} label="asset" onRequestClose={closeModal}>
        <h1>logo</h1>
        <main>context</main>
        <Button onClick={closeModal}>Close</Button>
      </ModalWindow>
    </>
  );
}
