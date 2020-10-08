import express from 'express';
import graphQLHttp from 'express-graphql';
import { schema, rootResolver } from 'src/schema';

const app = express();

app.use('/graphql', graphQLHttp(async (request, response, graphQLParams) => {
    return {
        schema: schema,
        rootValue: rootResolver,
        graphiql: true
    }}
));

export default app;
