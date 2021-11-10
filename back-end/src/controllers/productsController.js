// criar const model de trazer produtos

const getProducts = (req, res) => {

  // colocar model para buscar produtos

  res.status(200).json(products)
}

module.exports = { getProducts }