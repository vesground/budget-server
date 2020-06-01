import { GraphQLList } from 'graphql';

import TransactionType from 'graphql/types/Transaction.js';
import resolver from './resolver';

export default {
  type: new GraphQLList(TransactionType),
  resolver
};
