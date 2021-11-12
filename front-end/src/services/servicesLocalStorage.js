export const getFromLocalStorage = (key) => {
  const storedItem = localStorage.getItem(key);
  return storedItem;
};

export const setOnLocalStorage = (key, value) => {
  let itemToBeStored = value;
  if (typeof value === 'object') itemToBeStored = JSON.stringify(value);
  localStorage.setItem(key, itemToBeStored);
};
