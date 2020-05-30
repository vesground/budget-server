import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  id: { type: Schema.Types.ObjectId, required: true, unique: true },
  photo_url: { type: String, required: true },
  title: { type: String, required: true },
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true },
});

const Category = mongoose.model('Category', schema);

export default Category;
