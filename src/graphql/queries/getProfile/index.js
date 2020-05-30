import { GraphQLList } from 'graphql';

const AuthorType = require('./AuthorType');
const resolver = require('./resolver');

export default {
    type: new GraphQLList(AuthorType),
    description: "List of all Authors",
    resolver
},
