const setLoginLocalStorage = ({ login, password, history }) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: login, password }),
  };
  fetch('http://localhost:3001/login', requestOptions)
    .then((response) => {
      if (response.ok === false) {
        setIsEmailInvalid(true);
      } else {
        response.json().then((data) => {
          localStorage.setItem('user', JSON.stringify(data));
          history.push('/customer/products');
        });
      }
    })
    .catch((err) => console.log(err));
};

export default setLoginLocalStorage;
