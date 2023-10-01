'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LoginContext = createContext(null);
const { Provider } = LoginContext;

export const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (login) return;
    const isLoggedIn = localStorage.getItem('login');
    if (isLoggedIn) {
      setLogin(true);
    }
  }, [login]);
  return <Provider value={{ login, setLogin }}>{children}</Provider>;
};

export const useLoginContext = () => {
  return useContext(LoginContext);
};
