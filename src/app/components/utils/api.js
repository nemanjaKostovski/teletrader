async function getSymbols() {
  const res = await fetch('http://localhost:3000/getSymbols');
  return res.json();
}

async function getSymbolDetails(symbol) {
  const res = await fetch('http://localhost:3000/getSymbolDetails', {
    method: 'POST',
    body: JSON.stringify({ symbol }),
  });
  return res.json();
}

export { getSymbols, getSymbolDetails };
