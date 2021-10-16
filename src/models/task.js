const mongoose = require('mongoose');
const { stringify } = require('querystring');
const { Schema } = mongoose;

const TaskSchema = new Schema ({
    title: {type: String, require: true},
    description: {type: String, require: true}
});

module.exports = mongoose.model('Task', TaskSchema);