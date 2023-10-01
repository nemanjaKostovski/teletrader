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
      <table className='w-1/2 mt-8 text-center'>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Last price</th>
            <th>High</th>
            <th>Low</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{symbol}</td>
            <td>{last}</td>
            <td>{high}</td>
            <td>{low}</td>
          </tr>
        </tbody>
      </table>
      {isLoggedIn &&
        (favorites.includes(symbol) ? (
          <button onClick={handleRemoveFromFavorites}>
            Remove from Favorites
          </button>
        ) : (
          <button onClick={handleAddToFavorites}>Add to Favorites</button>
        ))}
    </div>
  );
};
export default page;
