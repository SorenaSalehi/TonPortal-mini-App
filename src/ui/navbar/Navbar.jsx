import React from "react";
import { FaWallet } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { convertWalletAddress } from "../../utils/helpers";
import { walletModal, walletDisconnected } from "./navbarSlice";
import ModalWindow from "../ModalWindow";
import Button from "../Button";
import { TbPlugConnectedX } from "react-icons/tb";
import WalletOptions from "./WalletOptions";
import { useTonConnectUI } from "@tonconnect/ui-react";

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
      <p className="flex items-center gap-1 text-2xl font-extrabold tracking-widest text-transparent uppercase bg-gradient-to-b from-indigo-800 to-purple-900 bg-clip-text">
        <div className="w-8">
          <img src="Webp.png" className="w-full h-auto" />
        </div>
        <p className="text-lg">Portal</p>
      </p>
      <div className="flex items-center gap-2 p-2 rounded-lg bg-glass">
        <span className="text-sm">{walletAddress || "wallet Address"}</span>
        <FaWallet />
        <span>
          <WalletOptions onClick={() => dispatch(walletModal())} />
        </span>
      </div>

      {/* //*modal */}
      <ModalWindow
        isOpen={isWalletModalOpen}
        label="walletModal"
        onRequestClose={() => dispatch(walletModal())}
      >
        <h1>logo</h1>

        <p>
          do you want to disconnect <br /> your wallet?
        </p>
        <Button onClick={handleDisconnectedWallet}>
          <span className="text-xl font-semibold text-rose-600">
            <TbPlugConnectedX />
          </span>
          Disconnect Wallet
        </Button>
      </ModalWindow>
    </div>
  );
}
