const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  id: { type: Schema.Types.ObjectId, required: true, unique: true },
  author: { type: Schema.Types.ObjectId, required: true, unique: true },
  category: { type: Schema.Types.ObjectId, required: true, unique: true },
  description: String,
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true },
});

const Transaction = mongoose.model('Transaction', schema);

module.exports = Transaction;
