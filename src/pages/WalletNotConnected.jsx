import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "motion/react";

import { walletConnected } from "../ui/navbar/navbarSlice";
import {
  TonConnectButton,
  useTonAddress,
  useTonWallet,
} from "@tonconnect/ui-react";
import AppName from "../ui/AppName";

export default function WalletNotConnected() {
  const wallet = useTonWallet();
  const userAddress = useTonAddress();
  const dispatch = useDispatch();

  useEffect(() => {
    if (wallet) {
      dispatch(walletConnected(userAddress));
    }
  }, [wallet, dispatch]);

  return (
    <div className="flex flex-col items-center bg-black bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-900/35 via-black to-black text-slate-100 h-dvh justify-evenly p-4">
      <motion.div
        transition={{ duration: 1, delay: 1, ease: "circIn" }}
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        }}
      >
        <AppName />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="flex flex-col items-start gap-2 px-4 py-2 border-2 rounded-lg border-indigo-950/85"
      >
        <p className="text-rose-400/85 ">Prompt</p>
        <h1 className="">Getting Started by Connecting Your Wallet.</h1>
      </motion.div>

      <TonConnectButton />

      {/* Display user's address if connected */}
      {userAddress && (
        <p className="text-green-500">
          Connected: {userAddress.slice(0, 6)}...{userAddress.slice(-4)}
        </p>
      )}
    </div>
  );
}
