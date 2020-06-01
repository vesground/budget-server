import Category from 'models/Category.js';

async function resolver(args) {
  try {
    const categories = await Category.find({}).exec();
    console.log('list categories', JSON.stringify(categories));
    return categories;
  } catch (error) {
    throw new Error(error);
  }
}

export default resolver;
