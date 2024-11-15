//ton number
// https://tonapi.io/v2/accounts/walletAddress
//jetton data
// https://tonapi.io/v2/accounts/walletAddress/jettons?currencies=usd

import { convertTonBalance, filterJettons } from "../utils/helpers";

const walletAddress = "UQDU9nluoOuT66p-8YHR2iQBg_NQRAPuphCwJi7fKsirFCdc";

export default async function getTonData() {
  try {
    const res = await fetch(`https://tonapi.io/v2/accounts/${walletAddress}`);
    const data = await res.json();

    if (!data) throw new Error("Wallet ton balance can not fetch!!");

    const balance = convertTonBalance(data.balance);
    return { data, balance };
  } catch (err) {
    console.error(err.message);
  }
}

export async function getTonPrice() {
  try {
    const res = await fetch(
      `https://tonapi.io/v2/rates?tokens=ton&currencies=usd`
    );
    const data = await res.json();

    if (data) {
      const price = parseFloat(data.rates?.TON?.prices?.USD).toFixed(2);
      return price;
    } else {
      throw new Error("ton price can not fetch");
    }
  } catch (err) {
    console.error(err.message);
  }
}

export async function getJettons() {
  try {
    const res = await fetch(
      `https://tonapi.io/v2/accounts/${walletAddress}/jettons?currencies=usd`
    );
    const data = await res.json();

    if (!data) throw new Error("Wallet jettons balance can not fetch!!");

    const allBalance = filterJettons(data.balances);
    return allBalance;
  } catch (err) {
    console.error(err.messages);
  }
}
