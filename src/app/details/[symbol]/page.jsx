'use client';

import { useSearchParams } from 'next/navigation';

const page = ({ params }) => {
  const searchParams = useSearchParams();

  const last = searchParams.get('last_price');
  const high = searchParams.get('high');
  const low = searchParams.get('low');
  const symbol = params.symbol.toUpperCase();

  const isLoggedIn = localStorage.getItem('login') || null;
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  const handleAddToFavorites = () => {
    favorites.push(symbol);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  const handleRemoveFromFavorites = () => {
    if (!favorites) return;

    const newFavorites = [...favorites];

    localStorage.removeItem('favorites');

    const index = newFavorites.indexOf(symbol);

    if (index > -1) {
      newFavorites.splice(index, 1);

      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    }
  };

  return (
    <div>
      <h2>Details</h2>
      <table className='w-1/2 mt-8 ml-4 shadow-md table-auto border-separate p-4'>
        <thead>
          <tr>
            <th className='text-left'>Symbol</th>
            <th className='text-right'>Last price</th>
            <th className='text-right'>High</th>
            <th className='text-right'>Low</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='text-left'>{symbol}</td>
            <td className='text-right'>{last}</td>
            <td className='text-right'>{high}</td>
            <td className='text-right'>{low}</td>
          </tr>
        </tbody>
      </table>
      {isLoggedIn &&
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
