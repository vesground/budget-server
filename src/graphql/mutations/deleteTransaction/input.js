import { GraphQLNonNull, GraphQLString } from 'graphql';

const input = {
      id: {
          name: "id",
          type: new GraphQLNonNull(GraphQLString)
      },
  },
}

export default input;
