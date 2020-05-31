import Category from 'models/Category.js';

async function resolver(root, args) {
    const deletedAuthor =  await Author.findByIdAndRemove(args.id);

    if(!deletedAuthor) {
        throw new Error('Error')
    }
    return deletedAuthor;
}

export default resolver;
