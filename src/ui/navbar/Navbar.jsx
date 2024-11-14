import React from "react";
import { FaWallet } from "react-icons/fa";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { walletActions, walletDisconnected } from "./navbarSlice";
import { useNavigate } from "react-router";
import ModalWindow from "../ModalWindow";
import Button from "../Button";

export default function Navbar() {
  const { isWalletModalOpen, isWalletConnected } = useSelector(
    (store) => store.navbar
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleDisconnectedWallet() {
    dispatch(walletDisconnected());
    dispatch(walletActions());
    navigate("/");
  }

  return (
    <div className="flex justify-between px-2 py-4 text-2xl">
      <p>logo</p>
      <button
        onClick={() => dispatch(walletActions())}
        className="flex items-center gap-2 p-2 rounded-lg bg-glass"
      >
        <span className="text-sm">SBHG...27SJ</span>
        <FaWallet />
      </button>

      <ModalWindow
        isOpen={isWalletModalOpen}
        label="walletModal"
        onRequestClose={() => dispatch(walletActions())}
      >
        <h1>logo</h1>

        <p>do you want to disconnect your wallet?</p>
        <Button onClick={handleDisconnectedWallet}>Disconnect Wallet</Button>
      </ModalWindow>
    </div>
  );
}
