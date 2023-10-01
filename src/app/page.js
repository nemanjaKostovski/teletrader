'use client';

import Link from 'next/link';
import { getSymbols, getSymbolDetails } from './components/utils/api';
import { useState, useEffect } from 'react';

export default function Home() {
  const [symbols, setSymbols] = useState(null);
  const [symbolsDetails, setSymbolsDetails] = useState([]);

  useEffect(() => {
    async function symbolsFetching() {
      const data = await getSymbols();

      setSymbols(data.data.slice(0, 5));
    }

    symbolsFetching();
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
  return (
    <main>
      <h1>Homepage</h1>
      <table className='w-1/2 mt-8 ml-4 shadow-md table-auto border-separate p-4'>
        <thead>
          <tr>
            <th className='text-left'>Name</th>
            <th className='text-right'>Last</th>
            <th className='text-right'>Change</th>
            <th className='text-right'>Change Percent</th>
            <th className='text-right'>High</th>
            <th className='text-right'>Low</th>
          </tr>
        </thead>
        <tbody>
          {symbols &&
            symbolsDetails.map((details, index) => (
              <tr key={`${details.data.symbol}${index}`}>
                <td className='text-left'>
                  <Link
                    href={`/details/${details.data.symbol}?last_price=${details.data.last_price}&high=${details.data.high}&low=${details.data.low}`}
                    className='text-blue-500 hover:text-blue-600 active:text-blue-700'
                  >
                    {details.data.symbol.toUpperCase()}
                  </Link>
                </td>
                <td className='text-right'>{details.data.last_price}</td>
                <td className='text-right'>{details.data.change}</td>
                <td className='text-right'>{details.data.change_percent}</td>
                <td className='text-right'>{details.data.high}</td>
                <td className='text-right'>{details.data.low}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
}
