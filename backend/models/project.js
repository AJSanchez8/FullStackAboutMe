

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image: String
});

module.exports = mongoose.model('Project', ProjectSchema);
// --> Lo guarda en projects ya que lo pone todo en minúsculas y plural