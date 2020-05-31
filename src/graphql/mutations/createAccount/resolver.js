import Account from 'models/Account.js';

async function resolver(root, param) {
    const model = new Account(param);
    const savedItem = await model.save();

    if(!savedItem) {
        throw new Error('Error')
    }
    return savedItem;
}

export default resolver;
