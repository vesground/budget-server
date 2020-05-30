import { GraphQLObjectType } from 'graphql';

import getProfile from './getProfile';

const Query = new GraphQLObjectType ({
    name: 'BlogAppSchema',
    description: "Blog Application Schema Query Root",
    fields: () => ({
        getProfile,
    })
});

export default Query;
