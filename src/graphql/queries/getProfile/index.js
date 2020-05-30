const { GraphQLList } = require('graphql');

const AuthorType = require('./AuthorType');
const resolver = require('./resolver');

module.exports = {
    type: new GraphQLList(AuthorType),
    description: "List of all Authors",
    resolver
},
