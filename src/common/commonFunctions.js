// Routes split

class CommonFunctions {
  mapRoutes(instance, methods) {
    return methods.map((method) => instance[method]());
  }
}

module.exports = CommonFunctions;
