import React, { lazy, useState } from "react";
import { motion } from "motion/react";

const ModalWindow = lazy(() => import("../../ui/ModalWindow"));

import { useModal } from "../../hooks/useModal";
import { useAssetCalculations } from "../../hooks/useAssetCalculations";
import { useDispatch } from "react-redux";
import { analyzeOneToken } from "./assetsSlice";

export default function AssetItem({
  type,
  tokenPrice,
  balance,
  decimals,
  symbol,
  icon,
  openModal,
  tokenName,
}) {
  const dispatch = useDispatch();

  //balance
  const { formattedTokenPrice, finalBalance, finalTotalPrice } =
    useAssetCalculations({
      type,
      balance,
      tokenPrice,
      decimals,
    });

  function handleClick() {
    openModal();
    dispatch(analyzeOneToken(tokenName));
  }

  const Icon = type === "ton" ? "ton_symbol.png" : icon;
  const Symbol = type === "ton" ? "Toncoin" : symbol;

  return (
    <>
      <motion.div
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        onClick={handleClick}
        className="flex justify-between p-2 cursor-pointer bg-black/10 backdrop-brightness-150 rounded-xl"
      >
        <div className="grid w-32 grid-cols-2 grid-rows-2 gap-2 cursor-pointer">
          <p className="w-12 h-12 row-span-2 overflow-hidden rounded-full">
            <img src={Icon} alt="icon" loading="lazy" />
          </p>
          <p className="font-semibold tracking-wider text-blue-400 uppercase justify-self-start">
            {Symbol}
          </p>
          <p className="text-xs tracking-tight text-slate-100/55">
            <span className="text-[0.55rem] mr-[0.1rem]">$</span>
            {formattedTokenPrice}
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-1">
            <span className="text-xs text-slate-200/25">Balance</span>
            <p>{finalBalance}</p>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-slate-200/25">Total</span>
            <p>
              <span className="mr-[0.1rem] text-xs">$</span>
              {finalTotalPrice}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
