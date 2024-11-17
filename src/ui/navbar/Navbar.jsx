import React from "react";
import { FaWallet } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { convertWalletAddress } from "../../utils/helpers";
import { walletActions, walletDisconnected } from "./navbarSlice";
import ModalWindow from "../ModalWindow";
import Button from "../Button";
import { TbPlugConnectedX } from "react-icons/tb";
import WalletOptions from "./WalletOptions";

export default function Navbar() {
  const { isWalletModalOpen, isWalletConnected } = useSelector(
    (store) => store.navbar
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const wallet = convertWalletAddress(
    "UQDU9nluoOuT66p-8YHR2iQBg_NQRAPuphCwJi7fKsirFCdc"
  );

  function handleDisconnectedWallet() {
    dispatch(walletDisconnected());
    dispatch(walletActions());
    navigate("/");
  }

  return (
    <div role="navbar" className="flex justify-between px-2 py-4 text-2xl ">
      <p className="text-2xl font-extrabold tracking-widest text-transparent uppercase bg-gradient-to-b from-indigo-800 to-purple-900 bg-clip-text">
        PROFILE-AI
      </p>
      <div className="flex items-center gap-2 p-2 rounded-lg bg-glass">
        <span className="text-sm">{wallet}</span>
        <FaWallet />
        <span>
          <WalletOptions onClick={() => dispatch(walletActions())} />
        </span>
      </div>

      {/* //*modal */}
      <ModalWindow
        isOpen={isWalletModalOpen}
        label="walletModal"
        onRequestClose={() => dispatch(walletActions())}
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
