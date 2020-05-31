import { GraphQLObjectType } from 'graphql';

import createProfile from 'graphql/mutations/createProfile';
import createCategory from 'graphql/mutations/createCategory';
import updateCategory from 'graphql/mutations/updateCategory';
import deleteCategory from 'graphql/mutations/deleteCategory';

const Mutation = new GraphQLObjectType ({
    name: 'Mutation',
    fields: () => ({
        createProfile,
        createCategory,
        deleteCategory,
        updateCategory,
    })
});

export default Mutation;
