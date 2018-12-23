const ModelFactory = require("./ModelFactory");
const ControllerFactory = require("./ControllerFactory");

const methods = [
  { name: "get" },
  { name: "get", param: "id" },
  { name: "post" },
  { name: "put", param: "id" },
  { name: "delete", param: "id" }
];

class Taoka {
  constructor(name, schema, ...args) {
    this.name = name;
    this.schema = schema;
    this.Model = ModelFactory(name, schema);
    this.Controller = new ControllerFactory(this.Model, ...args);
  }
  with(app) {
    const restModelName = this.name.toLowerCase();
    methods.map(({ name, param }) => {
      const restName = param
        ? "/" + restModelName + "/:" + param
        : "/" + restModelName;

      app[name](restName, (req, res) => this.Controller[name](req, res));
    });
  }
}

module.exports = Taoka;
