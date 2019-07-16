const mongoose = require('mongoose');

const {database} = require('../dev')

//---------------import separator------------------------

const connectionPath =
    `mongodb://${database.mongodb.username}:${database.mongodb.password}@${database.mongodb.host}:`
    + `${database.mongodb.port}/function?retryWrites=${database.mongodb.retryWrites}`;

module.exports = () => {
    console.log(`Creating database connection for drive url ${connectionPath}`);

    console.log(`Connecting with database..`);
    mongoose.connect(connectionPath, {useNewUrlParser: true});

    console.log(`Connecting with database...`);
    let db = mongoose.connection;

    console.log(`Connecting with database....`);
    db.once('open', () => console.log('Connection with db successful.'));

    db.on('error', console.error.bind(console, 'MongoDB connection failed due to unexpected error'));
}