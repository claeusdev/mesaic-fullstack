// Service to share common logic amongst components

import axios from 'axios';

const HOST = 'http://localhost:4002';
// Rather than have an axios function/method for each request type
// This functions dynamically accepts the method type, path and data
export const call = async (method, path, data) => {
  const response = await axios[method](`${HOST}/${path}`, data);
  return response.data;
};

export default { call };
