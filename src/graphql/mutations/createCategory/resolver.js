import Category from 'models/Category.js';

async function resolver(root, param) {
    const model = new Category(param);
    const savedItem = await model.save();

    if(!savedItem) {
        throw new Error('Error')
    }
    return savedItem;
}

export default resolver;
