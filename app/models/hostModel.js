let path = require('path');
let config = require(path.join(__dirname,'../../config/config.json'));
// TODO: user and pass
let url = "mongodb://"+config.host+"/"+config.database;

var mongoose = require('mongoose');
mongoose.connect(url);

var Schema = mongoose.Schema;

var hostSchema = new Schema({
    name: String,
    hostgroup: String,
    so: String
});


var Host = mongoose.model('Host', hostSchema);
module.exports = Host;