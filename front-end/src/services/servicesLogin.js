import axios from 'axios';

export async function loginService({ email, password }) {
  const END_POINT = 'http://localhost:3001/login';
  // console.log(email, password, '<-----------------------------');
  try {
    const { data } = await axios.post(END_POINT, { email, password });
    return data;
  } catch (error) {
    console.log(error.message, 'errooooooo');
  }

  // ;
  // const request = await fetch(END_POINT);
  // const response = await request.json();
}

export async function seilah(parametros) {
  const { email, senha } = parametros;
  console.log(email, senha);

  // const apiDomain = {
  //   comidas: 'themealdb',
  //   bebidas: 'thecocktaildb',
  // };
  // const END_POINT = `https://www.${apiDomain[apelidoAPI]}.com/api/json/v1/1/lookup.php?i=${input}`;
  // const request = await fetch(END_POINT);
  // const response = await request.json();
  // return ((apelidoAPI === 'comidas') ? response.meals[0] : response.drinks[0]);
}
