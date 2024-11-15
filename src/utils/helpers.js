export function convertTonBalance(balance) {
  const nano = 10 ** 9;
  const ton = (balance / nano).toFixed(2);
  return ton;
}

export function convertJettonBalance(balance, decimal = 9) {
  if (String(balance).length <= decimal) {
    return `0.${String(balance).slice(-4)}`;
  }

  const first = String(balance)
    .slice(0, -decimal)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const seconde = String(balance).slice(first.length, first.length + 2);

  const results = `${first}.${seconde}`;
  return results;
}

function cleanNumString(str) {
  return typeof str === "string" ? str.replaceAll(",", "") : str;
}

export function calcJettonTotalPrice(amount, price) {
  const totalPrice = cleanNumString(amount) * cleanNumString(price);

  return totalPrice.toFixed(2);
}

export function convertWalletAddress(address) {
  const first = String(address).slice(0, 4);
  const second = String(address).slice(-4);

  return `${first}...${second}`;
}

export function filterJettons(data) {
  const results = data.filter(
    (token) =>
      token.balance !== "0" &&
      token.jetton.verification !== "whitlist" &&
      token.price.prices.USD !== 0
  );
  return results;
}
