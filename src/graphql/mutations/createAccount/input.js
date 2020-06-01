import { GraphQLNonNull, GraphQLString } from 'graphql';

const input = {
  owner_id: {
    name: "owner_id",
    type: new GraphQLNonNull(GraphQLString)
  },
};

export default input;
