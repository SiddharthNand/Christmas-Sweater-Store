const Item = require('../../models/cart');

module.exports = {
  getCart,
  show,
  create,
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