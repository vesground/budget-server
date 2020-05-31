import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  id: { type: Schema.Types.ObjectId, required: true, unique: true },
  owner: { type: Schema.Types.ObjectId, required: true, unique: true },
  contributors: [Schema.Types.ObjectId],
  transactions: [Schema.Types.ObjectId],
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true },
});

const Account = mongoose.model('Account', schema);

export default Account;
