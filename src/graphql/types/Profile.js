import { GraphQLString, GraphQLObjectType, GraphQLNonNull } from 'graphql';
import mongoose from 'mongoose';

// const Author = require('../../models/Author');
// const AuthorType = require('./AuthorType');

const Profile = new GraphQLObjectType({
    name: 'Profile',
    description: "This is resent post",
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLString)},
        email: {type: GraphQLString},
        first_name: {type: GraphQLString},
        last_name: {type: GraphQLString},
        photo_url: {type: GraphQLString},
        // author: {type: AuthorType, resolve: async function (post) {
        //     var authors =  await  Author.findById(mongoose.Types.ObjectId(post.author_id))
        //     return authors
        // }}
    })
});

export default Profile
