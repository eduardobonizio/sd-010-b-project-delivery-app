const applicationJson = 'application/json';

export default function handleFetch(email, password, url) {
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: applicationJson,
      'Content-Type': applicationJson,
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
}
