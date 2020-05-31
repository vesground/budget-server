import TransactionType from 'graphql/types/Transaction.js';

import input from './input';
import resolver from './resolver';

const updateTransaction = {
    type: TransactionType,
    args: input,
    resolve: resolver
}

export default updateTransaction;
