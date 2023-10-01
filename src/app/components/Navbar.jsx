'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [login, setLogin] = useState(false);

  function handleLogin() {
    localStorage?.setItem('login', login);
    setLogin(true);
  }

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (login) return;
    const isLoggedIn = localStorage.getItem('login');
    if (isLoggedIn) {
      setLogin(true);
    }
  }, [login]);

  return (
    <nav className='flex flex-row justify-between w-9/12'>
      <div className='w-60 flex justify-evenly'>
        <Link className='hover:text-blue-500 active:text-blue-600' href='/'>
          Home
        </Link>
        {login && (
          <Link
            className='hover:text-blue-500 active:text-blue-600'
            href='/favorites'
          >
            Favorites
          </Link>
        )}
      </div>
      {!login && (
        <button className='m-4 p-2 px-6 bg-blue-500' onClick={handleLogin}>
          Login
        </button>
      )}
    </nav>
  );
};
export default Navbar;
