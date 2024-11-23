import { useQuery } from "@tanstack/react-query";

import AssetItem from "./AssetItem";
import getTonData, { getJettons, getTonPrice } from "../../services/apiTon";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../hooks/useModal";
import {
  allTokenSymbols,
  assetsAnalyzeLoadingAction,
  clearAssetsAnalyze,
  oneAssetAnalyzeReceive,
} from "./assetsSlice";
import { getTokenAnalyze } from "../../services/apiTel";
import { useEffect } from "react";
import Loader from "../../ui/Loader";
import ModalWindow from "../../ui/ModalWindow";
import { getAllTokensName } from "../../utils/helpers";

export default function Assets() {
  const { userAddress } = useSelector((store) => store.navbar);
  const { assetsAnalyzeLoading, singleAnalyzeContent, singleAnalyzeToken } =
    useSelector((store) => store.asset);
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

  const webapp = window.Telegram.WebApp;

  //* when modal open
  useEffect(() => {
    webapp.ready();

    async function getSingleAnalyze() {
      try {
        dispatch(assetsAnalyzeLoadingAction());
        const data = await getTokenAnalyze(webapp, `${singleAnalyzeToken}`);

        console.log("single analyze:", data);

        if (data) dispatch(oneAssetAnalyzeReceive(data.data));
      } catch (error) {
        console.error(error.message);
      } finally {
        dispatch(clearAssetsAnalyze());
        dispatch(assetsAnalyzeLoadingAction());
      }
    }

    getSingleAnalyze();

    //* when modal open
  }, [isOpen]);

  //* if ton data or jettons error
  if (tonDataError || jettonsError)
    return (
      <Error
        message={
          "Can Not Receive Data!! please Check your Connection or Refresh The App."
        }
      />
    );

  if (!jettonsLoading) {
    return dispatch(allTokenSymbols(getAllTokensName(jettonsData)));
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
                tokenName="toncoin"
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
                isModalOpen={openModal}
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
