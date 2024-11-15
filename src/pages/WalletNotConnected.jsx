import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../ui/Loader";
import { walletConnected } from "../ui/navbar/navbarSlice";
import Button from "../ui/Button";
import { TbPlugConnected } from "react-icons/tb";

export default function WalletNotConnected() {
  const { walletConnectLoading } = useSelector((store) => store.navbar);
  const dispatch = useDispatch();

  function handleConnectWallet() {
    dispatch(walletConnected());
  }

  if (walletConnectLoading) return <Loader />;

  return (
    <div className="flex flex-col items-center bg-black bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-900/35 via-black to-black text-slate-100 h-dvh justify-evenly p-4">
      <p className="text-2xl font-extrabold tracking-widest text-transparent uppercase bg-gradient-to-b from-indigo-800 to-purple-900 bg-clip-text animate-bounce">
        PROFILE-AI
      </p>
      <div className="flex flex-col items-start gap-2 px-4 py-2 border-2 rounded-lg border-indigo-950/85">
        <p className="text-rose-400/85 ">Prompt</p>
        <h1 className="">Getting Started by Connecting Your Wallet.</h1>
      </div>
      <Button onClick={handleConnectWallet}>
        <span className="text-xl font-semibold text-green-500">
          <TbPlugConnected />
        </span>
        Connecting
      </Button>
    </div>
  );
}
