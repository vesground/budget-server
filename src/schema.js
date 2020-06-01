import { GraphQLObjectType,GraphQLSchema } from 'graphql';

import mutation from 'graphql/mutations';
import query from 'graphql/queries';

const Schema = new GraphQLSchema({ query, mutation });

export default Schema;
