const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String },
    desciption: { type: String },
    thumbnail: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: String, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
