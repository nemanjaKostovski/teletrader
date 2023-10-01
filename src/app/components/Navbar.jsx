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
        <Link href='/'>Home</Link>
        {login && <Link href='/favorites'>Favorites</Link>}
      </div>
      {!login && <button onClick={handleLogin}>Login</button>}
    </nav>
  );
};
export default Navbar;
