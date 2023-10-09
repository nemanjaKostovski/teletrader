'use client';

import Table from './components/Table';
import useSymbolData from './components/useSymbolData';

export default function Home() {
  const { symbols, symbolsDetails } = useSymbolData();
  if (symbols === null || symbolsDetails.length === 0) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }
  return (
    <main>
      <h1>Homepage</h1>
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
}
