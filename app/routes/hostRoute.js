const HostController = require("../controllers/HostController");

module.exports = app => {
  app.get("/host", (...params) => HostController.get(...params));
  app.get("/host/:id", (...params) => HostController.get(...params));
  app.post("/host", (...params) => HostController.post(...params));
  app.put("/host/:id", (...params) => HostController.put(...params));
  app.delete("/host/:id", (...params) => HostController.delete(...params));
};
