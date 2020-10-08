import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Contributor = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
    role: { type: String, enum : ['owner', 'participant'], required: true }
})

const schema = new Schema({
  contributors: [{ type: Contributor }],
  transactions: [{ type: Schema.Types.ObjectId, ref: 'Transaction' }],
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const Account = mongoose.model('Account', schema);

export default Account;
