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
        password: {type: GraphQLString},
        first_name: {type: GraphQLString},
        last_name: {type: GraphQLString},
        photo_url: {type: GraphQLString},
    })
});

export default Profile
