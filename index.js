import express from 'express';
import graphQLHttp from 'express-graphql';
import schema from 'src/schema';
import mongoose from 'mongoose';
import database from 'config/database';
const port = 3000;

mongoose.Promise = global.Promise;
mongoose.connect(database.mongoConnectionString, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },(err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('db connection is okay');
    }
});

const app = express();

app.use('/', graphQLHttp({
    schema: schema,
    graphiql: true
}));

app.listen(port, () => {
    console.log('server running at port', port)
});
