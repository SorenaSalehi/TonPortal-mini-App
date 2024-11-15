import React from "react";
import { useQuery } from "@tanstack/react-query";

import AssetItem from "./AssetItem";
import getTonData, { getJettons, getTonPrice } from "../../services/apiTon";
import { convertTonBalance, filterJettons } from "../../utils/helpers";

export default function Assets() {
  const {
    data: tonData,
    isLoading: tonDataLoading,
    isError: tonDataErrors,
  } = useQuery({
    queryKey: ["userTonBalance"],
    queryFn: getTonData,
  });
  const {
    data: tonPrice,
    isLoading: tonPriceLoading,
    isError: tonPriceError,
  } = useQuery({
    queryKey: ["tonPrice"],
    queryFn: getTonPrice,
  });

  const {
    data: jettonsData,
    isLoading: jettonsLoading,
    isError,
  } = useQuery({
    queryKey: ["jettons"],
    queryFn: getJettons,
  });

  if (tonDataLoading || tonPriceLoading || jettonsLoading)
    return <div>loading</div>;

  

  return (
    <>
      <p className="font-semibold">🔝 Assets</p>
      <div className="flex flex-col gap-2 overflow-scroll no-scrollbar">
        <AssetItem type="ton" balance={tonData.balance} tokenPrice={tonPrice} />
        {jettonsData.map((token) => (
          <AssetItem
            balance={token.balance}
            decimals={token.jetton.decimals}
            icon={token.jetton.image}
            symbol={token.jetton.symbol}
            key={token.jetton.name}
          />
        ))}
      </div>
    </>
  );
}
