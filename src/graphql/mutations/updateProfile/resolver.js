import Profile from 'models/Profile.js';

async function resolver(root, args) {
    const { id, ...updateItem } = args;

    const updatedItem = await Profile.findByIdAndUpdate(id, updateItem, { new: true });

    if(!updatedItem) {
        throw new Error('Error')
    }
    return updatedItem;
}

export default resolver;
