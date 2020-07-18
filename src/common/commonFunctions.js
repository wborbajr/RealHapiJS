// Routes split

class CommonFunctions {
  static mapRoutes(instance, methods) {
    return methods.map((method) => instance[method]());
  }
}

module.exports = CommonFunctions;
