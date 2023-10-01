'use client';

import Link from 'next/link';
import { useLoginContext } from './loginContext/loginContext';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const { login, setLogin } = useLoginContext();
  const pathName = usePathname();

  function handleLogin() {
    localStorage?.setItem('login', login);
    setLogin(true);
  }

  return (
    <nav className='flex flex-row justify-between w-9/12'>
      <div className='w-60 flex justify-evenly'>
        <Link
          className={`active:text-blue-600 ${
            pathName === '/' ? 'text-blue-500' : ''
          }`}
          href='/'
        >
          Home
        </Link>
        {login && (
          <Link
            className={`active:text-blue-600 ${
              pathName.includes('favorites') ? 'text-blue-500' : ''
            }`}
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
