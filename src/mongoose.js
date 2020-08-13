import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.connect(database.mongoConnectionString, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },(err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('db connection is okay');
    }
});
