import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name, value, option) => cookies.set(name, value, { ...option, path: '/' });

export const getCookie = (name) => cookies.get(name);

export const removeCookie = (name) => cookies.remove(name);
