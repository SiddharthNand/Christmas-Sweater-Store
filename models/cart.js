const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  id: {
    type: Number,
  },
  item: {
    type: String,
  },
  price: {
    type: String,
  },
  img: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId, ref:'User'
  },
});

module.exports = mongoose.model('Cart', cartSchema);