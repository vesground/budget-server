import { GraphQLNonNull, GraphQLString } from 'graphql';

const input = {
      email: {
          name: "email",
          type: new GraphQLNonNull(GraphQLString)
      },
      first_name: {
          name: "first_name",
          type: new GraphQLNonNull(GraphQLString)
      },
      last_name: {
          name: "last_name",
          type: new GraphQLNonNull(GraphQLString)
      },
      password: {
          name: "password",
          type: new GraphQLNonNull(GraphQLString)
      },
      photo_url: {
          name: "photo_url",
          type: new GraphQLNonNull(GraphQLString)
      }
  },
}

export default input;
