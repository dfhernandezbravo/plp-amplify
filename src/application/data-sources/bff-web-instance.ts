import axios from 'axios';
import Cookies from 'universal-cookie';
import { AUTHCOOKIES } from '../infra/cookies';

const bffInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BFF_WEB_URL,
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY_BFF_WEB,
  },
});

bffInstance.interceptors.request.use(function (config) {
  const cookies = new Cookies();
  const accessToken = cookies.get(AUTHCOOKIES.ACCESS_TOKEN);

  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

export default bffInstance;
