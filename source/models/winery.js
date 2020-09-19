const mongoose = require('mongoose');

module.exports.Winery = mongoose.model('Winery', new mongoose.Schema({
    wineryId: mongoose.Schema.Types.ObjectId,
    latitude:{
        type: Number,
        required: true
    },
    longitude:{
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    founded: String,
    accommodation: Boolean
}));