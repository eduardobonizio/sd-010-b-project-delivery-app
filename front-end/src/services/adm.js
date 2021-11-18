import axios from 'axios';

const apiUrl = 'http://localhost:3001';

/** SOurce https://qastack.com.br/programming/45578844/how-to-set-header-and-options-in-axios */
const create = (token, user) => axios.post(`${apiUrl}/adm`, user, { headers: {
  authorization: token.token,
} });

export default create;
