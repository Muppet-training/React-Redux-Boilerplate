var mongoose = require('mongoose');

var usersSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    age: Number,
    description: String,
    thumbnail: String
});

var Users = mongoose.model('Users', usersSchema);
module.exports = Users;
