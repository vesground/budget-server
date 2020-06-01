import { GraphQLNonNull, GraphQLString } from 'graphql';

const input = {
  title: {
    name: "title",
    type: new GraphQLNonNull(GraphQLString)
  },
  photo_url: {
    name: "photo_url",
    type: new GraphQLNonNull(GraphQLString)
  },
};

export default input;
