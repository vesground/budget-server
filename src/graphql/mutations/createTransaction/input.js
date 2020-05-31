import { GraphQLNonNull, GraphQLString } from 'graphql';

const input = {
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
  },
}

export default input;
