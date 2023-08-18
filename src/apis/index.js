import axios from 'axios';
import { getCookie } from 'utils/cookie';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getCookie('accessToken')}`,
  },
});
export const loginInstance = axios.create({
  baseURL: process.env.REACT_APP_AUTH_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getCookie('accessToken')}`,
  },
});
