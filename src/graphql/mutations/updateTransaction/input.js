import { GraphQLNonNull, GraphQLString, GraphQLFloat } from 'graphql';

const input = {
  id: {
    name: "id",
    type: new GraphQLNonNull(GraphQLString)
  },
  amount: {
    name: "amount",
    type: new GraphQLNonNull(GraphQLFloat)
  },
  category: {
    name: "category",
    type: new GraphQLNonNull(GraphQLString)
  },
  description: {
    name: "description",
    type: new GraphQLNonNull(GraphQLString)
  },
};

export default input;
