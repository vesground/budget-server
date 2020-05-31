import Category from 'models/Category.js';

export async function (args) {
  try {
    const categories = await Category.find({}).exec();
    console.log('list categories', JSON.stringify(categories));
    return categories;
  } catch (error) {
    throw new Error(error);
  }
}
