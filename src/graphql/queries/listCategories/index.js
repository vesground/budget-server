import { GraphQLList } from 'graphql';

import CategoryType from 'graphql/types/Category.js';
import resolver from './resolver';

export default {
  type: new GraphQLList(CategoryType),
  resolver
};
