const mongoose = require('mongoose');

module.exports.User = mongoose.model ("User", new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    email: String,
    name: String,
    surname: String,
    username: String,
    passwordHash: String
}));