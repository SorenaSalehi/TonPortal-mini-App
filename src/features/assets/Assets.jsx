import { useQuery } from "@tanstack/react-query";

import AssetItem from "./AssetItem";
import getTonData, { getJettons, getTonPrice } from "../../services/apiTon";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../hooks/useModal";
import { allTokenSymbols } from "./assetsSlice";
import Loader from "../../ui/Loader";
import ModalWindow from "../../ui/ModalWindow";
import { getAllTokensName } from "../../utils/helpers";

export default function Assets() {
  const { userAddress } = useSelector((store) => store.navbar);
  const { assetsAnalyzeLoading, singleAnalyzeContent } = useSelector(
    (store) => store.asset
  );
  const { isOpen, openModal, closeModal } = useModal();

  const dispatch = useDispatch();

  //ton data
  const {
    data: tonData,
    isLoading: tonDataLoading,
    isError: tonDataError,
  } = useQuery({
    queryKey: ["userTonBalance"],
    queryFn: () => getTonData(userAddress),
    enabled: !!userAddress, // Only run query if userAddress exists
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
    enabled: !!userAddress, // Only run query if userAddress exists
  });

  //* if ton data or jettons error
  if (tonDataError || jettonsError)
    return (
      <Error
        message={
          "Can Not Receive Data!! please Check your Connection or Refresh The App."
        }
      />
    );

  if (jettonsData) {
    const tokens = getAllTokensName(jettonsData);
    dispatch(allTokenSymbols(tokens.join(",")));
  }

  return (
    <>
      <p className="flex items-center gap-2 font-semibold uppercase">Assets</p>
      <div className="flex flex-col gap-2 overflow-auto overflow-x-hidden no-scrollbar">
        {tonDataLoading || tonPriceLoading || jettonsLoading ? (
          //* main loading
          <Loader />
        ) : (
          <>
            {!tonPriceError ? (
              <AssetItem
                type="ton"
                balance={tonData.balance}
                tokenPrice={tonPrice}
                openModal={openModal}
                symbol="ton"
              />
            ) : (
              //* in case the ton data error
              <p className="p-2 cursor-none bg-black/10 backdrop-brightness-150 rounded-xl">
                Ton Data could not Receive! Please Check Your connection or
                Refresh the Page
              </p>
            )}

            {/* jettons data  */}
            {jettonsData.map((token) => (
              <AssetItem
                balance={token.balance}
                tokenPrice={token.price.prices.USD}
                decimals={token.jetton.decimals}
                icon={token.jetton.image}
                symbol={token.jetton.symbol}
                key={token.jetton.name}
                openModal={openModal}
                tokenName={token.jetton.name}
              />
            ))}
          </>
        )}
      </div>
      <ModalWindow
        isOpen={isOpen}
        onRequestClose={closeModal}
        label="assets modal"
        content={singleAnalyzeContent}
        onClose={closeModal}
        isDataLoading={assetsAnalyzeLoading}
      />
    </>
  );
}
