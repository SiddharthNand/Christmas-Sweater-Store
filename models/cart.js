const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  quantity: {
    type: Number,
  },
  item: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId, ref:'User'
  },
});

module.exports = mongoose.model('Cart', cartSchema);