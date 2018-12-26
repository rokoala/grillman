const EntityManagerFactory = require("./EntityManagerFactory");

class ControllerFactory {
  constructor(Model) {
    this.EntityManager = new EntityManagerFactory(Model);
  }
  _sendElement(res) {
    return element => res.send(element);
  }
  _successHandlerWrapper(res) {
    res.status(200);
    return this._sendElement(res);
  }
  _errorHandlerWrapper(res) {
    res.status(500);
    return this._sendElement(res);
  }
  _promiseResultHandler(res) {
    return promise =>
      promise
        .then(result => this._successHandlerWrapper(res)(result))
        .catch(err => this._errorHandlerWrapper(res)(err));
  }
  get(req, res) {
    const { id } = req.params;
    return id
      ? this._promiseResultHandler(res)(this.EntityManager.getById(id))
      : this._promiseResultHandler(res)(this.EntityManager.find());
  }
  post(req, res) {
    const element = req.body;
    return this._promiseResultHandler(res)(this.EntityManager.post(element));
  }
  put(req, res) {
    const { id } = req.params;
    const element = req.body;
    return this._promiseResultHandler(res)(this.EntityManager.put(id, element));
  }
  delete(req, res) {
    const { id } = req.params;
    return this._promiseResultHandler(res)(this.EntityManager.delete(id));
  }
}

module.exports = ControllerFactory;
