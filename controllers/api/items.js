const Item = require('../../models/cart');

module.exports = {
  getCart,
  show,
  create,
  deleteProduct,
};

async function getCart(req, res) {
  const items = await Item.find({user:req.params.id})
  // re-sort based upon the sortOrder of the categories
  res.json(items);
}

async function show(req, res) {
  const item = await Item.findById(req.params.id);
  res.json(item);
}

async function create (req, res) {
  const item = await Item.create(req.body)
  res.status(200).json(item)
}

async function deleteProduct(req, res) {
  console.log('its working')
  const item = await Item.findByIdAndDelete(req.params.id);
  console.log(item)
  res.json(item);
}