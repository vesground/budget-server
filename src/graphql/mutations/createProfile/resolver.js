import Profile from 'models/Profile.js';

async function resolver(root, param) {
    const model = new Profile(param);
    const savedItem = await model.save();

    if(!savedItem) {
        throw new Error('Error')
    }
    return savedItem;
}

export default resolver;
