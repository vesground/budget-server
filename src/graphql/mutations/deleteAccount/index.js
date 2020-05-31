import AccountType from 'graphql/types/Account.js';

import input from './input';
import resolver from './resolver';

const deleteAccont = {
    type: AccountType,
    args: input,
    resolve: resolver
}

export default deleteAccount;
