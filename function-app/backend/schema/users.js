const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collections = require("./collections");

const DataSchema = new Schema({
    googleId: String,
    imageUrl: String,
    email: String,
    name: String,
    firstName: String,
    lastName: String,
});

module.exports = mongoose.model(collections.USERS, DataSchema);