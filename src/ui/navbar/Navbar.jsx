import React from "react";
import { FaWallet } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

import { convertWalletAddress } from "../../utils/helpers";
import { walletModal, walletDisconnected } from "./navbarSlice";
import ModalWindow from "../ModalWindow";
import Button from "../Button";
import { TbPlugConnectedX } from "react-icons/tb";
import WalletOptions from "./WalletOptions";
import { useTonConnectUI } from "@tonconnect/ui-react";
import AppName from "../AppName";

export default function Navbar() {
  const [tonConnectUI] = useTonConnectUI();
  const { isWalletModalOpen, isWalletConnected, userAddress } = useSelector(
    (store) => store.navbar
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const walletAddress = convertWalletAddress(userAddress || "");
  async function handleDisconnectedWallet() {
    await tonConnectUI.disconnect();
    navigate("/");
    dispatch(walletDisconnected());
    dispatch(walletModal());
  }

  return (
    <div role="navbar" className="flex justify-between px-2 py-4 text-2xl">
      {/* //*logo */}
      <motion.button onClick={() => navigate("/")} whileTap={{ scale: 0.9 }}>
        <AppName />
      </motion.button>

      {/* //*wallet */}
      {isWalletConnected && (
        <div
          onClick={() => dispatch(walletModal())}
          className="flex items-center gap-2 px-2 py-1 rounded-2xl bg-white/10 "
        >
          <span className="text-sm">
            {walletAddress === "..." ? "Connect" : walletAddress}
          </span>
          <div className="w-5 ">
            <img src="wallet1.png" />
          </div>
        </div>
      )}

      {/* //*modal */}
      <ModalWindow
        isOpen={isWalletModalOpen}
        label="walletModal"
        onRequestClose={() => dispatch(walletModal())}
        height="16rem"
      >
        <div className="flex flex-col items-center">
          <p className="px-3 py-2 my-8 rounded-lg shadow-2xl bg-white/10 backdrop-brightness-200">
            do you want to disconnect <br /> your wallet?
          </p>
          <Button onClick={handleDisconnectedWallet}>
            <span className="text-xl font-semibold text-rose-600">
              <TbPlugConnectedX />
            </span>
            Disconnect Wallet
          </Button>
        </div>
      </ModalWindow>
    </div>
  );
}
