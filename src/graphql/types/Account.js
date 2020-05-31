import { GraphQLString, GraphQLObjectType, GraphQLNonNull, GraphQLList } from 'graphql';
import mongoose from 'mongoose';

import TimestampType from 'graphql/types/scalars.js';
import TransactionType from 'graphql/types/TransactionType.js';
import ProfileType from 'graphql/types/Profile.js';

const ownerResolver = async (args) => {
  const author =  await Profile.findById(mongoose.Types.ObjectId(args.id));
  return author;
};

const Account = new GraphQLObjectType({
    name: 'Account',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLString) },
        owner: { type: ProfileType, resolve: authorResolver },
        contributors: { type: new GraphQLList(ProfileType) },
        transactions: { type: new GraphQLList(TransactionType) },
        created_at: { type: TimestampType },
        updated_at: { type: TimestampType },
    })
});

export default Account
