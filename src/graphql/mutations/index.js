var { addAuthor, updateAuthor, deleteAuthor } = require('./AuthorMutation');
var { createPost, updatePost, deletePost} = require('./PostMutation')

export default {
    addAuthor,
    updateAuthor,
    deleteAuthor,
    createPost,
    updatePost,
    deletePost
}