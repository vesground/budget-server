import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  id: Schema.Types.ObjectId,
  email: String,
  first_name: String,
  last_name: String,
  password: String,
  photo_url: String,
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true },
});

const Profile = mongoose.model('Profile', schema);

export default Profile;
