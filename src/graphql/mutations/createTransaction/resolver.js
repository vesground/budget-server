import Transaction from 'models/Transaction.js';

async function resolver(root, param) {
    const model = new Transaction(param);
    const savedItem = await model.save();

    if(!savedItem) {
        throw new Error('Error')
    }
    return savedItem;
}

export default resolver;
