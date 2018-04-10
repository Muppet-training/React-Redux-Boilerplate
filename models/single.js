var mongoose = require('mongoose');

var singleSchema = mongoose.Schema({
    firstName: String
});

var Single = mongoose.model('Single', singleSchema);
module.exports = Single;
