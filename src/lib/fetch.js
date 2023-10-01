const URL = 'https://api.bitfinex.com';
const VERSION = '/v1';

async function getSymbols() {
  const response = await fetch(`${URL}${VERSION}/symbols`);
  if (response.status !== 200) {
    throw new Error(`Fetch failed ${response.status}`);
  }

  const data = await response.json();
  return data;
}

async function getSymbolDetails(symbol) {
  const response = await fetch(
    `https://api-pub.bitfinex.com/v2/ticker/t${symbol.toUpperCase()}`
  );
  if (response.status !== 200) {
    console.log(response);
  }

  const data = await response.json();
  return data;
}

export { getSymbols, getSymbolDetails };
