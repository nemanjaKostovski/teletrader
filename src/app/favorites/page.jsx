'use client';

import { useState, useEffect } from 'react';
import Table from '../components/Table';
import useSymbolData from '../components/useSymbolData';

const Favorites = () => {
  const [symbols, setSymbols] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const favorites = localStorage.getItem('favorites');
    if (!favorites) return;
    setSymbols(JSON.parse(favorites));
  }, []);

  const { symbolsDetails } = useSymbolData();
  if (symbols === null || symbolsDetails.length === 0) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }
  return (
    <main>
      <h1>Favorites page</h1>
      <Table
        headerName
        headerLast
        headerChange
        headerChangePercent
        headerHigh
        headerLow
        href
        last_price
        change
        change_percent
        high
        low
        symbols={symbols}
        details={symbolsDetails}
      />
    </main>
  );
};
export default Favorites;
