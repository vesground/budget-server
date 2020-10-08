import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  email: String,
  first_name: String,
  last_name: String,
  // password: String,
  photo_url: String,
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const Profile = mongoose.model('Profile', schema);

export default Profile;
