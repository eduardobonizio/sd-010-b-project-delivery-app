import axios from 'axios';

const BASE_URL = 'https://crudcrud.com/api/01acdeccd017471ea00bb20f2f782201/';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export async function getAll(url) {
  const { data } = await axiosInstance.get(url);
  return data;
}

export async function postAll(url, object) {
  const { data } = await axiosInstance.post(url, object);
  return data;
}

export async function edit(url, object) {
  const { data } = await axiosInstance.put(url, object);
  return data;
}
