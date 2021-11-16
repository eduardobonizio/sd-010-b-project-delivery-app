export const getFromLocalStorage = (key) => {
  const storedItem = localStorage.getItem(key);
  return JSON.parse(storedItem);
};

export const setOnLocalStorage = (key, value) => {
  let itemToBeStored = value;
  if (typeof value === 'object') itemToBeStored = JSON.stringify(value);
  localStorage.setItem(key, itemToBeStored);
};

export const constructNewObject = (value, retrievedItem) => {
  const newObject = Object.keys(retrievedItem).reduce((_, key) => {
    if (retrievedItem[key] && value[key]) {
      return { [key]: { ...retrievedItem[key], ...value[key] } };
    }
    return retrievedItem[key];
  }, {});
  return newObject;
};

// Atualiza algo no localstorage, tem de passar uma chave e o valor que será atualizado.
export const updateLocalStorage = (key, value) => {
  const retrievedItem = getFromLocalStorage(key);
  if (typeof value === 'object') {
    const newItem = constructNewObject(value, retrievedItem);
    const stringfiedItem = JSON.stringify(newItem);
    localStorage.setItem(key, stringfiedItem);
  } else {
    localStorage.setItem(key, value);
  }
};

export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};
