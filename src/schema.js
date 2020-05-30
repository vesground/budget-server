import { GraphQLObjectType,GraphQLSchema } from 'graphql';

import mutation from './graphql/mutations/index';
import query from './graphql/queries/index';

const Schema = new GraphQLSchema({
   query,
   mutation: new GraphQLObjectType({
       name: 'Mutation',
       fields: mutation
   })
});

export default Schema;
