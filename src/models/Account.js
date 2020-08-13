import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Contributor = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
    role: { type: Role, enum : ['owner', 'participant'], required: true }
})

const schema = new Schema({
  id: { type: Schema.Types.ObjectId, required: true, unique: true },
  contributors: [{ type: Contributor }],
  transactions: [{ type: Schema.Types.ObjectId, ref: 'Transaction' }],
}, { timestamps: true });

const Account = mongoose.model('Account', schema);

export default Account;
