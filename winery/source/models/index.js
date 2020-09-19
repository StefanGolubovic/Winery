const user = require('./user').User;
const winery = require('./winery').Winery;
const wine = require('./wine').Wine;
const storage = require('./storage').Storage;

module.exports = {
    User: user,
    Winery: winery,
    Wine: wine,
    Storage: storage
};