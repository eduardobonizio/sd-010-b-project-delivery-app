import axios from 'axios';

const apiUrl = 'http://localhost:3001';

const getSales = () => axios.get(`${apiUrl}/sales`);

export default getSales;
