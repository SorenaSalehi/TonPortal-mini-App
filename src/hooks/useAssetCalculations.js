import { calcJettonTotalPrice, convertJettonBalance } from "../utils/helpers";

export const useAssetCalculations = ({
  type,
  balance,
  tokenPrice,
  decimals,
}) => {
  //*wallet ton balance * token price per dolor
  const tonTotalPrice =
    type === "ton" && balance && tokenPrice
      ? `${(balance * tokenPrice).toFixed(2)}`
      : "Uncertain!";

  //*display jetton balance on UI
  const convertedBalance = convertJettonBalance(+balance, decimals);

  //*converted jetton * token price per dolor
  const jettonTotalPrice =
    type !== "ton" && balance && tokenPrice
      ? `${calcJettonTotalPrice(convertedBalance, tokenPrice)}`
      : "0.00";

  //*formatting price for UI
  const formattedTokenPrice =
    tokenPrice === 0
      ? ``
      : `${type === "ton" ? tokenPrice : parseFloat(tokenPrice).toFixed(10)}`;

  //*checking if  is ton or jetton
  const finalBalance = type === "ton" ? balance : convertedBalance;
  const finalTotalPrice = type === "ton" ? tonTotalPrice : jettonTotalPrice;

  return {
    formattedTokenPrice,
    finalBalance,
    finalTotalPrice,
  };
};
