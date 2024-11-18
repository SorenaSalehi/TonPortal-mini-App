import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../ui/Loader";
import { walletConnected } from "../ui/navbar/navbarSlice";
import Button from "../ui/Button";
import { TbPlugConnected } from "react-icons/tb";
import {
  TonConnectButton,
  useTonAddress,
  useTonWallet,
} from "@tonconnect/ui-react";

export default function WalletNotConnected() {
  const wallet = useTonWallet();
  const userAddress = useTonAddress();
  console.log(wallet, userAddress);
  const { walletConnectLoading } = useSelector((store) => store.navbar);
  const dispatch = useDispatch();

  useEffect(() => {
    if (wallet) {
      dispatch(walletConnected(userAddress));
    }
  }, [wallet, dispatch]);

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
      {/* <Button onClick={handleConnectWallet}>
        <span className="text-xl font-semibold text-green-500">
          <TbPlugConnected />
        </span>
        Connecting
      </Button> */}
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
