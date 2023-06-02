// const BASE_URL = 'http://localhost:4444';
const BASE_URL = 'https://delivery-app-server-production.up.railway.app';

export const request = (url: string, option?: RequestInit | undefined) => {
  return fetch(`${BASE_URL}${url}`, option)
    .then(res => {
      if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
      }

      // console.log(res.json());
      

      return res.json();
    });
};
