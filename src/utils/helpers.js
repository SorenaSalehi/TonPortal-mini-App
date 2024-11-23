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
  const ids = data.map((group) => group.groupId);
  return ids.split(",");
}

export function getAllTokensName(data) {
  const allData = data.map((data) => data.jetton.symbol);
  console.log(["toncoin", ...allData]);
  return ["toncoin", ...allData];
}

// {
//   "balance": "0",
//   "price": {
//       "prices": {
//           "USD": 0.0000070311553513569245
//       },
//       "diff_24h": {
//           "USD": "−3.78%"
//       },
//       "diff_7d": {
//           "USD": "0.00%"
//       },
//       "diff_30d": {
//           "USD": "0.00%"
//       }
//   },
//   "wallet_address": {
//       "address": "0:2ebb16533d26b20c08f058ab6d59ca825eb9593613407111c487b01db86f7304",
//       "is_scam": false,
//       "is_wallet": false
//   },
//   "jetton": {
//       "address": "0:83ee5aebc6939cab903947a9d32de17592e21b97504a09ee4e9da9c67b7701e0",
//       "name": "RabBitcoin",
//       "symbol": "RBTC",
//       "decimals": 9,
//       "image": "https://cache.tonapi.io/imgproxy/ov0e9-NpM7QE-QAWix44xTepBkPSRRHWkrdnHrOb3nI/rs:fill:200:200:1/g:no/aHR0cHM6Ly9jZG4ucm9ja3lyYWJiaXQuaW8vcmJ0Yy1pY29uLzUxMng1MTIucG5n.webp",
//       "verification": "whitelist"
//   }
// },
