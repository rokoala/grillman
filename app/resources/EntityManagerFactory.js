class EntityManagerFactory {
  constructor(ModelApi) {
    this.ModelApi = ModelApi;
  }
  find() {
    return this.ModelApi.find();
  }
  getById(id) {
    return this.ModelApi.findById(id);
  }
  post(element) {
    return this.ModelApi.create(element);
  }
  put(id, newElement) {
    return this.ModelApi.findByIdAndUpdate(id, newElement, {
      new: true
    });
  }
  delete(id) {
    this.ModelApi.findByIdAndRemove(id);
  }
}

module.exports = EntityManagerFactory;
