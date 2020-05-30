const { GraphQLObjectType } = require('graphql');

const getProfile = require('./getProfile');

const BlogQueryRootType = new GraphQLObjectType ({
    name: 'BlogAppSchema',
    description: "Blog Application Schema Query Root",
    fields: () => ({
        getProfile,
    })
});

module.exports = BlogQueryRootType
