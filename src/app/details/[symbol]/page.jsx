'use client';

import Table from '@/app/components/Table';
import { useLoginContext } from '@/app/components/loginContext/loginContext';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const page = ({ params }) => {
  const searchParams = useSearchParams();
  const { login } = useLoginContext();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const last = searchParams.get('last_price');
  const high = searchParams.get('high');
  const low = searchParams.get('low');
  const symbol = params.symbol.toUpperCase();

  const handleAddToFavorites = () => {
    const updatedFavorites = [...favorites, symbol];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const handleRemoveFromFavorites = () => {
    if (!favorites) return;

    const updatedFavorites = [...favorites];
    const index = updatedFavorites.indexOf(symbol);
    if (index === -1) {
      return;
    }
    updatedFavorites.splice(index, 1);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };
  return (
    <div>
      <h2>Details</h2>
      <Table
        headerName
        headerLast
        headerHigh
        headerLow
        symbol={symbol}
        last={last}
        high={high}
        low={low}
      />
      {login &&
        (favorites.includes(symbol) ? (
          <button
            className='m-4 p-2 px-6 bg-red-500'
            onClick={handleRemoveFromFavorites}
          >
            Remove from Favorites
          </button>
        ) : (
          <button
            className='m-4 p-2 px-6 bg-blue-500'
            onClick={handleAddToFavorites}
          >
            Add to Favorites
          </button>
        ))}
    </div>
  );
};
export default page;
