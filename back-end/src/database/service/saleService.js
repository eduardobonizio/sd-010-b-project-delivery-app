const createSale = async () => {
  console.log('service');
  const createSale = await sale.create();
  return createSale;
};

module.exports = { createSale };
