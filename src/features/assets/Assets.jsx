import React from "react";
import { useQuery } from "@tanstack/react-query";

import Loader from "../../ui/Loader";
import AssetItem from "./AssetItem";
import getTonData, { getJettons, getTonPrice } from "../../services/apiTon";
import { AiFillPropertySafety } from "react-icons/ai";

export default function Assets() {
  //ton data
  const {
    data: tonData,
    isLoading: tonDataLoading,
    isError: tonDataError,
  } = useQuery({
    queryKey: ["userTonBalance"],
    queryFn: getTonData,
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
    queryFn: getJettons,
  });

  if (tonDataError || tonPriceError || jettonsError)
    return <div>Something went wrong</div>;

  return (
    <>
      <p className="flex items-center gap-2 font-semibold uppercase">
        <AiFillPropertySafety />
        Assets
      </p>
      <div className="flex flex-col gap-2 overflow-auto no-scrollbar">
        {tonDataLoading || tonPriceLoading || jettonsLoading ? (
          <Loader />
        ) : (
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
        )}
      </div>
    </>
  );
}
