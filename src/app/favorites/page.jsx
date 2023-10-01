'use client';

import { getSymbolDetails } from '../components/utils/api';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Favorites = () => {
  const [symbolsDetails, setSymbolsDetails] = useState([]);

  const symbols = JSON.parse(localStorage.getItem('favorites')) || null;

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
  }, []);
  return (
    <main>
      <h1>Homepage</h1>
      <table className='w-1/2 mt-8 ml-4 text-center'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last</th>
            {/* <th>Change</th>
            <th>Change Percent</th> */}
            <th>High</th>
            <th>Low</th>
          </tr>
        </thead>
        <tbody>
          {symbols &&
            symbolsDetails.map((details, index) => (
              <tr key={`${details.data.symbol}${index}`}>
                <td>
                  <Link
                    href={`/details/${details.data.symbol}?last_price=${details.data.last_price}&high=${details.data.high}&low=${details.data.low}`}
                  >
                    {details.data.symbol.toUpperCase()}
                  </Link>
                </td>
                <td>{details.data.last_price}</td>
                <td>{details.data.high}</td>
                <td>{details.data.low}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
};
export default Favorites;
