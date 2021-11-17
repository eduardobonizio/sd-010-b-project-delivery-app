const fixPrice = (price) => {
  const number = price.replace('.', ',');

  return number;
};

export default fixPrice;
