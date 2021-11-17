import axios from 'axios';

const API_URL = 'http://localhost:3001/';

const getProducts = () => axios.get(`${API_URL}cliente/produto`);

export default getProducts;