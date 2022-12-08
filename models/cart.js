const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
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

module.exports = mongoose.model('Item', itemSchema);