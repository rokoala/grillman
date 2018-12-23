const path = require("path");
const config = require(path.join(__dirname, "../../config/config.json"));
// TODO: user and pass
const url = "mongodb://" + config.host + "/" + config.database;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ModelFactory = (name, schema) => {
  mongoose.connect(url);
  return mongoose.model(name, new Schema(schema));
};

module.exports = ModelFactory;
