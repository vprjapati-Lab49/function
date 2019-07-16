const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collections = require("./collections");

const DataSchema = new Schema({
    title: String,
    description: String,
    date: Date,
    priority: String,
    currentStatus: String,
    subtasks: Array
});

module.exports = mongoose.model(collections.TASKS, DataSchema);