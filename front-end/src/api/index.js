import axios from 'axios';

const loginUrl = 'http://localhost:3001/login';

const config = {
  Headers: {
    'Content-Type': 'application/json',
  },
};

export const login = (user) => axios.post(loginUrl, user, config);

export const teste = (user) => axios.post(loginUrl, user, config);
