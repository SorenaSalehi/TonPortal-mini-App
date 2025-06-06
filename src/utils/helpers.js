export function convertTonBalance(balance) {
  const nano = 10 ** 9;
  const ton = (balance / nano).toFixed(2);
  return ton;
}

export function convertJettonBalance(balance, decimal = 9) {
  //if balance less then decimal num
  if (String(balance).length <= decimal) {
    return `0.${String(balance).slice(-4)}`;
  }

  //if more then decimal num
  //displaying large num with separator comma
  //decreasing decimal num from balance
  const first = String(balance)
    .slice(0, -decimal)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //getting two float num
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

//for display on navbar
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

export function getAllUserGroupsId(data) {
  return data?.map((group) => group?.groupId);
}

export function getAllTokensName(data) {
  return ["ton", ...data?.map((data) => data?.jetton?.symbol)];
}
