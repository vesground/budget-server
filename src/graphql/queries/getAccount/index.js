import { GraphQLList } from 'graphql';

import AccountType from 'graphql/types/Account.js';
import resolver from './resolver';

export default {
    type: AccountType,
    resolver
},
