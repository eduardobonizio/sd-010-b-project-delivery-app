const fixPrice = (price) => {
  const number = price.replace('.', ',');
  console.log('number fixed', number, price);

  return number;
};

export default fixPrice;
