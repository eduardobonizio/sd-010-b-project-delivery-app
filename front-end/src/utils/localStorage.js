export function createStorage(chave, valor) {
  localStorage.setItem(chave, JSON.stringify(valor));
  return 'ok';
}

export function getStorage(chave) {
  return JSON.parse(localStorage.getItem(chave));
}
