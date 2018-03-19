var mongoose = require('mongoose');

var shareholdersSchema = mongoose.Schema({
    name: String,
    shareholders: String,
    total: Number
});

var Shareholders = mongoose.model('Shareholders', shareholdersSchema);
module.exports = Shareholders;
