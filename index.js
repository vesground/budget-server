import express from 'express';
import graphQLHttp from 'express-graphql';
import schema from 'src/schema';
import database from 'config/database';
const port = 3000;

import 'src/mongoose.js';

const app = express();

app.use(
  '/graphql',
  graphQLHttp({
    schema: schema,
    graphiql: true
  }),
);
// app.use('/graphql', graphQLHttp(async (request, response, graphQLParams) => {
//   console.log('request', request);
//   return {
//     schema: schema,
//     graphiql: true
//       // rootValue: await someFunctionToGetRootValue(request),
//   }}
// ));

app.listen(port, () => {
    console.log('server running at port', port)
});
