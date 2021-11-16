import axios from 'axios';

const apiUrl = 'http://localhost:3001';

export const getSalles = () => axios.get(`${apiUrl}/sales`);