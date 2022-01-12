const mongoose = require('mongoose')

const TextSchema = mongoose.Schema({
    id: String,
    text: String
});

module.exports = mongoose.model('Text', TextSchema);
