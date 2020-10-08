require('custom-env').env('test');
import mocha from 'mocha';
import {assert} from 'chai';

import connnectMongodb from 'src/connectMongoDB';

import app from '../app.js';

let server, connection;

before(async done => {
    connection = await connnectMongodb();
    console.log('connection', connection);
    server = app.listen(3000, done);
});

describe('MongoDB inegretion', () => {
    it('Success connection', () => {
        // Code
    });
});

after(done => {
    connection.close();
    server.close(done);
});
