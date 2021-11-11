const applicationJson = 'application/json';

export default function handleFetch(body, url) {
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: applicationJson,
      'Content-Type': applicationJson,
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => error);
}
