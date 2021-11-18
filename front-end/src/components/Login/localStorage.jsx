// Retorna algo persistido no localstorage buscando pela sua chave "key" !!Tem de ser String!!
// export const getFromLocalStorage = (key) => {
//   const storedItem = localStorage.getItem(key);
//   return JSON.parse(storedItem);
// };

// Persiste algo no localstorage, tem de passar uma chave e o valor que será parseado para string.
const setOnLocalStorage = (login) => {
  // let itemToBeStored = login;
  if (typeof login === 'object') itemToBeStored = JSON.stringify(login);
  console.log('items', itemToBeStored, 'items');
  login.forEach((data) => localStorage.setItem(Object.keys(data), Object.values(data)));
};

// const constructNewObject = (value, retrievedItem) => {
//   const newObject = Object.keys(retrievedItem)
//     .reduce((_, key) => {
//       if (retrievedItem[key] && value[key]) {
//         return { [key]: { ...retrievedItem[key], ...value[key] } };
//       }
//       return retrievedItem[key];
//     }, {});
//   console.log('newObject', newObject);
//   return setOnLocalStorage(newObject);
// };
module.exports = { setOnLocalStorage };
// // Atualiza algo no localstorage, tem de passar uma chave e o valor que será atualizado.
// export const updateLocalStorage = (key, value) => {
//   const retrievedItem = getFromLocalStorage(key);
//   if (typeof value === 'object') {
//     const newItem = constructNewObject(value, retrievedItem);
//     const stringfiedItem = JSON.stringify(newItem);
//     localStorage.setItem(key, stringfiedItem);
//   } else {
//     localStorage.setItem(key, value);
//   }
// };

// export const removeFromLocalStorage = (key, objKey, value) => {
//   const filteredItem = getFromLocalStorage(key).filter((obj) => obj[objKey] !== value);
//   setOnLocalStorage(key, filteredItem);
// };
