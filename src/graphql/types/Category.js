import { GraphQLString, GraphQLObjectType, GraphQLNonNull } from 'graphql';
import mongoose from 'mongoose';

// const Author = require('../../models/Author');
// const AuthorType = require('./AuthorType');

const Category = new GraphQLObjectType({
    name: 'Category',
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLString)},
        title: {type: GraphQLString},
        photo_url: {type: GraphQLString},
    })
});

export default Category
