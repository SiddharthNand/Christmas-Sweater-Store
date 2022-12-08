const Item = require('../../models/cart');

module.exports = {
  index,
  show,
  create,
};

async function index(req, res) {
  const items = await Item.find({}).sort('item').populate('price').exec();
  // re-sort based upon the sortOrder of the categories
  items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
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