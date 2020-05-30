import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  id: { type: Schema.Types.ObjectId, required: true, unique: true },
  owner: { type: Schema.Types.ObjectId, required: true, unique: true },
  contributors: [Schema.Types.ObjectId],
  operations: [Schema.Types.ObjectId],
});

const Account = mongoose.model('Account', schema);

export default Account;