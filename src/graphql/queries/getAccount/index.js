import graphql from 'graphql';
import AccountType from 'graphql/types/Account.js';
import resolver from './resolver';

export default {
    args: {
        id: {
            type : GraphQLInt,
        }
    },
    type: AccountType,
    resolver
};
