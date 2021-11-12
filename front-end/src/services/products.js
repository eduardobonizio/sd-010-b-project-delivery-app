import axios from 'axios';

const apiUrl = 'http://localhost:3001';

const getProducts = () => axios.get(`${apiUrl}/customer/products`);

export default getProducts;
