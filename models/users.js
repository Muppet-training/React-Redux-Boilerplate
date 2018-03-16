var mongoose = require('mongoose');

var usersSchema = mongoose.Schema({
    first: String,
    last: String,
    age: Number,
    description: String,
    thumbnail: String
});

var Users = mongoose.model('Users', usersSchema);
module.exports = Users;
