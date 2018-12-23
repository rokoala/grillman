const ModelFactory = require("../resources/ModelFactory");

module.exports = ModelFactory("Host", {
  name: String,
  hostgroup: String,
  so: String
});
