import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  photo_url: { type: String, required: true },
  title: { type: String, required: true },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const Category = mongoose.model('Category', schema);

export default Category;
