import { buildSchema } from 'graphql';
import { GraphQLTimestamp } from 'graphql-scalars';

import Account from 'models/Account.js';
import Profile from 'models/Profile.js';

// Construct a schema, using GraphQL schema language
export const schema = buildSchema(`
    scalar Timestamp

    type Profile {
        _id: ID,
        email: String,
        password: String,
        first_name: String,
        last_name: String,
        photo_url: String,
    }
    type Transaction {
        _id: ID,
        description: String,
        amount: Int,
        created_at: Timestamp,
        updated_at: Timestamp,
        author: Profile,
        category: Category
    }
    type Category {
        _id: ID,
        title: String,
        photo_url: String,
    }
    type Contributor {
        user: Profile,
        role: String
    }
    type Account {
        _id: ID,
        contributors: [Contributor],
        transactions: [Transaction],
        created_at: Timestamp,
        updated_at: Timestamp
    }
    type Query {
        getAccount(id: ID!): Account
    }
    type Mutation {
        createAccount(user_id: ID!): Account,
        createProfile(input: CreateProfileInput): Profile
    }
    input CreateProfileInput {
        email: String!,
        first_name: String!,
        last_name: String!
    }
`);

// The root provides a resolver function for each API endpoint
export const rootResolver = {
    getAccount: async ({ id }) => {
        try {
            const account = await Account.findById(id).exec();
            console.log('account', JSON.stringify(account));
            return account;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    },
    createProfile: async ({ email, first_name, last_name }) => {
        try {
            const new_profile = new Profile({ email, first_name, last_name });
            await new_profile.save();
            console.log('new profile', JSON.stringify(new_profile));
            return new_profile;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    },
    createAccount: async ({ user_id }) => {
        try {
            const owner = { user: user_id, role: CONTRIBUTORS_ROLES.OWNER };
            const new_account = new Account({ contributors: [owner], transactions: [] });
            await new_account.save();
            console.log('new account', JSON.stringify(new_account));
            return new_account;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    },
    Timestamp: GraphQLTimestamp
};
