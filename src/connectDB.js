const mongoose = require('mongoose')

mongoose.Promise = Promise

mongoose.connection.on('connected', () => {
  console.error('Connection Established')
})

mongoose.connection.on('reconnected', () => {
  console.error('Connection Reestablished')
})

mongoose.connection.on('disconnected', () => {
  console.error('Connection Disconnected')
})

mongoose.connection.on('close', () => {
  console.error('Connection Closed')
})

mongoose.connection.on('error', (error) => {
  console.error('ERROR: ' + error)
})

const run = async () => {
    const config = process.env;
    const connectionString = `mongodb://${config.DATABASE_USER}:${config.DATABASE_PASS}@${config.DATABASE_HOST}:${config.DATABASE_PORT}/${config.DATABASE_NAME}`;

    await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        autoReconnect: true,
        reconnectTries: 1000000,
        reconnectInterval: 3000
    });
}

run().catch(error => console.error(error))
