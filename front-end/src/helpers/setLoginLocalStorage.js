const setLoginLocalStorage = ({ login, password }) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: login, password }),
  };
  fetch('http://localhost:3001/login', requestOptions)
    .then((response) => {
      if (response.ok === false) {
        console.log(response);
      } else {
        response.json().then((data) => {
          localStorage.setItem('user', JSON.stringify(data));
        });
      }
    })
    .catch((err) => console.log(err));
};

export default setLoginLocalStorage;
