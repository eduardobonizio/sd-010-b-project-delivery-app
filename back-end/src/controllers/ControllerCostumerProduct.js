const getCategories = async (req, res) => {
  const { exemplo } = req.body;
  return res.status(200).json(exemplo);
};

module.exports = {
  getCategories,
};