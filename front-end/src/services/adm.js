import axios from 'axios';

const apiUrl = 'http://localhost:3001';

const create = (user) => axios.post(`${apiUrl}/adm`, user);

export default create;
