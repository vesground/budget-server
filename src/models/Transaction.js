import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  author: { type: Schema.Types.ObjectId, required: true, unique: true },
  category: { type: Schema.Types.ObjectId, required: true, unique: true },
  amount: { type: Schema.Types.Number, required: true },
  description: String,
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const Transaction = mongoose.model('Transaction', schema);

export default Transaction;
