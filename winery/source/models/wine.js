const mongoose = require('mongoose');

module.exports.Wine = mongoose.model('Wine', new mongoose.Schema({
    wineId: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    type: {
        type:String,
        required: true
    },
    vintage: Number,
    aromas: [String],
    grapeVar: [String]
}));