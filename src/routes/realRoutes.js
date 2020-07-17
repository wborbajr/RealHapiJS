const BaseRoute = require("./base/baseRoute");

class HapiRoutes extends BaseRoute {
  default() {
    return {
      path: "/",
      method: "GET",
      handler: (request, h) => {
        return "Hello World!";
      },
    };
  }

  ping() {
    return {
      path: "/ping",
      method: "GET",
      handler: (request, h) => {
        return "pong!";
      },
    };
  }
}

module.exports = HapiRoutes;
