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

export default function WalletNotConnectedPage() {
  const wallet = useTonWallet();
  const userAddress = useTonAddress();
  const dispatch = useDispatch();

  console.log(wallet, userAddress);

  if (wallet && userAddress) {
    dispatch(walletConnected(userAddress));
  }

  // useEffect(() => {
  //   if (wallet && userAddress) {
  //     dispatch(walletConnected(userAddress));
  //   }
  // }, [wallet, dispatch, userAddress]);

  return (
    <div className="flex flex-col items-center p-4 text-slate-100 h-dvh justify-evenly">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="flex flex-col items-center justify-center gap-8 px-4 py-2 "
      >
        <AppName />
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
