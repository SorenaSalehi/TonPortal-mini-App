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
      <motion.button onClick={() => navigate("/")} whileTap={{ scale: 0.9 }}>
        <AppName />
      </motion.button>
      <div className="flex items-center gap-2 p-2 rounded-lg bg-glass">
        <span className="text-sm">
          {walletAddress === "..." ? "wallet Not Connected" : walletAddress}
        </span>
        <FaWallet />
        {isWalletConnected && (
          <span>
            <WalletOptions onClick={() => dispatch(walletModal())} />
          </span>
        )}
      </div>

      {/* //*modal */}
      <ModalWindow
        isOpen={isWalletModalOpen}
        label="walletModal"
        onRequestClose={() => dispatch(walletModal())}
        height="16rem"
      >
        <div className="flex flex-col items-center">
          <p className="mb-16 border-[0.01rem] px-3 py-2 rounded-lg border-slate-300/25 shadow-2xl backdrop-brightness-200">
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
