import { getCookie } from 'cookies-next/client';
export const useAuth = () => {
    const isAuth = getCookie('accessToken');
    if (isAuth) return true;
    return false;
};
