//ton number
// https://tonapi.io/v2/accounts/walletAddress
//jetton data
// https://tonapi.io/v2/accounts/walletAddress/jettons?currencies=usd

const walletAddress = "UQDU9nluoOuT66p-8YHR2iQBg_NQRAPuphCwJi7fKsirFCdc";

export default async function getTonData() {
  try {
    const res = await fetch(`https://tonapi.io/v2/accounts/${walletAddress}`);
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error("Wallet ton balance can not fetch!!");
  }
}
