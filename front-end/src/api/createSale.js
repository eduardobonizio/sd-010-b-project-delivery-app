import axios from './api';

const URL = '/sale';

const createSale = (saleData) => axios.post(URL, saleData)
  .then(({ data, status }) => ({ data, status }))
  .catch(({ response: { data, status } }) => ({ data, status }));

export default createSale;
