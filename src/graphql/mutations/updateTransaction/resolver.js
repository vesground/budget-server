import Transaction from 'models/Transaction.js';

async function resolver(root, args) {
    const { id, ...updateItem } = args;

    const updatedItem = await Transaction.findByIdAndUpdate(id, updateItem, { new: true });

    if(!updatedItem) {
        throw new Error('Error')
    }
    return updatedItem;
}

export default resolver;
