import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../ui/Loader";
import { walletConnected } from "../ui/navbar/navbarSlice";
import Button from "../ui/Button";

export default function WalletNotConnected() {
  const { walletConnectLoading } = useSelector((store) => store.navbar);
  const dispatch = useDispatch();

  function handleConnectWallet() {
    dispatch(walletConnected());
  }

  if (walletConnectLoading) return <Loader />;

  return (
    <div className="flex flex-col items-center bg-color text-slate-100 h-dvh justify-evenly">
      <p>logo</p>
      <p className="p-4 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis qui,
        molestiae modi dolor esse ea a error adipisci optio iste deserunt
        molestias nisi delectus accusamus eius, in dicta. Corporis, similique.
      </p>
      <Button onClick={handleConnectWallet}>Connect you Wallet</Button>
    </div>
  );
}
