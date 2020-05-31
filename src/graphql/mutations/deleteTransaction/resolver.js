import Transaction from 'models/Transaction.js';

async function resolver(root, args) {
    const deletedAuthor =  await Transaction.findByIdAndRemove(args.id);

    if(!deletedAuthor) {
        throw new Error('Error')
    }
    return deletedAuthor;
}

export default resolver;
