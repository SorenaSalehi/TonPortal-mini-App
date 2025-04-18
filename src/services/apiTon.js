import { convertTonBalance, filterJettons } from "../utils/helpers";

export default async function getTonData(userAddress) {
  try {
    const res = await fetch(`https://tonapi.io/v2/accounts/${userAddress}`);

    if (!res.ok) throw new Error("Ton Data could not receive!!");

    const data = await res.json();

    if (!data) throw new Error("Wallet ton balance can not fetch!!");

    const balance = convertTonBalance(data.balance);
    return { data, balance };
  } catch (err) {
    console.error(err);
  }
}

export async function getTonPrice() {
  try {
    const res = await fetch(
      `https://tonapi.io/v2/rates?tokens=ton&currencies=usd`
    );

    if (!res.ok) throw new Error("Ton Data could not receive!!");
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

export async function getJettons(userAddress) {
  try {
    const res = await fetch(
      `https://tonapi.io/v2/accounts/${userAddress}/jettons?currencies=usd`
    );

    if (!res.ok) throw new Error("Ton Data could not receive!!");

    const data = await res.json();

    if (!data) throw new Error("Wallet jettons balance can not fetch!!");

    const allBalance = filterJettons(data.balances);
    return allBalance;
  } catch (err) {
    console.error(err.messages);
  }
}
