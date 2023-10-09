'use client';

import { getSymbols, getSymbolDetails } from './utils/api';
import { useState, useEffect } from 'react';

const useSymbolData = () => {
  const [symbols, setSymbols] = useState(null);
  const [symbolsDetails, setSymbolsDetails] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getSymbols();
      setSymbols(data.data.slice(0, 5));
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (!symbols) return;
    async function pollData() {
      const data = await Promise.all(
        symbols.map((symbol) => {
          return getSymbolDetails(symbol);
        })
      );
      setSymbolsDetails(data);
    }

    pollData();

    const handleId = setInterval(pollData, 7000);

    return () => {
      clearInterval(handleId);
    };
  }, [symbols]);
  return { symbols, symbolsDetails };
};

export default useSymbolData;
