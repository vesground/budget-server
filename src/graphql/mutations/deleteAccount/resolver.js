import Account from 'models/Account.js';

async function resolver(root, args) {
    const deletedAuthor =  await Account.findByIdAndRemove(args.id);

    if(!deletedAuthor) {
        throw new Error('Error')
    }
    return deletedAuthor;
}

export default resolver;
