const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongoose_delete = require('mongoose-delete');


const Course = new Schema({
    name: { type: String, require: true },
    description: { type: String },
    thumbnail: { type: String },
    videoId: { type: String },
    slug: { type: String, slug: 'name', unique: true },
    level: { type: String },
}, {
    timestamps: true,
});

// add plugin
mongoose.plugin(slug);
Course.plugin(mongoose_delete, {
    overrideMethods: 'all',
    deletedAt: true,
});

module.exports = mongoose.model('Course', Course);
