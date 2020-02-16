import { useEffect } from 'react';
import Cookies from 'js-cookie';

export const useAuth = () => {
  const authCookie = Cookies.get('authToken');

  useEffect(() => {
    if (authCookie) {
    }
  });
};
