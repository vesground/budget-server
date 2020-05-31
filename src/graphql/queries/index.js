import { GraphQLObjectType } from 'graphql';

import getProfile from 'graphql/queries/getProfile';
import getAccount from 'graphql/queries/getAccount';
import listTransactions from 'graphql/queries/listTransactions';
import listCategories from 'graphql/queries/listCategories';

const Query = new GraphQLObjectType ({
    name: 'BlogAppSchema',
    description: "Blog Application Schema Query Root",
    fields: () => ({
        getAccount,
        getProfile,
        listCategories,
        listTransactions,
    })
});

export default Query;
