import { GraphQLString, GraphQLObjectType, GraphQLNonNull } from 'graphql';
import mongoose from 'mongoose';

import TimestampType from 'graphql/types/scalars.js';
import ProfileType from 'graphql/types/Profile.js';
import CategoryType from 'graphql/types/Category.js';

import Profile from 'models/Profile.js';
import Category from 'models/Category.js';

const authorResolver = async (args) => {
  const author =  await Profile.findById(mongoose.Types.ObjectId(args.id));
  return author;
};
const categoryResolver = async (args) => {
  const category = await Category.findById(mongoose.Types.ObjectId(args.id));
  return category;
};

const Transaction = new GraphQLObjectType({
    name: 'Transaction',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        amount: { type: GraphQLInt },
        created_at: { type: TimestampType },
        updated_at: { type: TimestampType },
        author: { type: ProfileType, resolve: authorResolver },
        category: { type: CategoryType, resolve: categoryResolver }
    })
});

export default Transaction
