import React from "react";
import { useQuery } from "@tanstack/react-query";

import Loader from "../../ui/Loader";
import AssetItem from "./AssetItem";
import getTonData, { getJettons, getTonPrice } from "../../services/apiTon";
import { AiFillPropertySafety } from "react-icons/ai";
import Error from "../../ui/Error";
import { useSelector } from "react-redux";

export default function Assets() {
  const { userAddress } = useSelector((store) => store.navbar);

  //ton data
  const {
    data: tonData,
    isLoading: tonDataLoading,
    isError: tonDataError,
  } = useQuery({
    queryKey: ["userTonBalance"],
    queryFn: () => getTonData(userAddress),
  });
  //ton price
  const {
    data: tonPrice,
    isLoading: tonPriceLoading,
    isError: tonPriceError,
  } = useQuery({
    queryKey: ["tonPrice"],
    queryFn: getTonPrice,
  });

  //all jettons data from user wallet
  const {
    data: jettonsData,
    isLoading: jettonsLoading,
    isError: jettonsError,
  } = useQuery({
    queryKey: ["jettons"],
    queryFn: () => getJettons(userAddress),
  });

  if (tonDataError || tonPriceError || jettonsError)
    return <Error error={tonDataError || tonPriceError || jettonsError} />;

  if (tonDataLoading || tonPriceLoading || jettonsLoading) return <Loader />;

  return (
    <>
      <p className="flex items-center gap-2 font-semibold uppercase">
        <AiFillPropertySafety />
        Assets
      </p>
      <div className="flex flex-col gap-2 overflow-auto no-scrollbar">
        <>
          <AssetItem
            type="ton"
            balance={tonData.balance}
            tokenPrice={tonPrice}
          />
          {jettonsData.map((token) => (
            <AssetItem
              balance={token.balance}
              tokenPrice={token.price.prices.USD}
              decimals={token.jetton.decimals}
              icon={token.jetton.image}
              symbol={token.jetton.symbol}
              key={token.jetton.name}
            />
          ))}
        </>
      </div>
    </>
  );
}
