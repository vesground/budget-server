import AccountType from 'graphql/types/Account.js';

import input from './input';
import resolver from './resolver';

const createTransaction = {
    type: AccountType,
    args: input,
    resolve: resolver
}

export default createTransaction;
