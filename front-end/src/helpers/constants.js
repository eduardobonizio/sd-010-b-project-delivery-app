const serverUrl = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_PROD_API_URL
  : process.env.REACT_APP_DEV_API_URL;
// const serverUrl = 'https://grupo-19-delivery-app.herokuapp.com';
const test = 'teste';

export {
  serverUrl,
  test,
};