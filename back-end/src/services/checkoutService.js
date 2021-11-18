const { Sale, User } = require('../database/models');

const createSale = async (body, user_id) => {
  console.log(body);
  const { seller_id, total_price, delivery_address, delivery_number, status } = body;
  const dateNow = new Date();
  
  // criar a venda
  const payloadSale = { 
    user_id, seller_id, total_price, delivery_address, delivery_number, sale_date: dateNow, status 
  }
  const { dataValues } = await Sale.create(payloadSale);

  // retorna data e id da venda
  const { id, sale_date } = dataValues;
  return { status: 201, data: { id, sale_date }};
};


const getSaleById = async (id) => {
  
  const sales = await Sale.findOne({ where: { id } });
  
  if(!sales) return { status: 404, data: { message: 'Venda não encontrada'}}
  const { seller_id, total_price, sale_date, status } = sales;
  
  const seller = await User.findOne({ where: { id: seller_id } });

  // falta retornar os produtos, acredito que seja feito através da tabela de junção
  
  // nome do vendedor
  const { name } = seller;
  const data = { id, name, total_price, sale_date, status };
  return { status: 200, data };
};

module.exports = {
  createSale,
  getSaleById,
}
