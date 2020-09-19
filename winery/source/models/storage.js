const mongoose = require('mongoose');

module.exports.Storage = mongoose.model("Storage", new mongoose.Schema({
    winery: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Winery'
    },
    wine: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Wine'
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}));