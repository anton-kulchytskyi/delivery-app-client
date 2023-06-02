import { request } from './api';

export const getShops = () => {
  return request('/shops');
};
