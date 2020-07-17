const BaseRoute = require("./base/baseRoute");

class RealRoutes extends BaseRoute {
  default() {
    return {
      path: "/",
      method: "GET",
      config: {
        description: "Default",
        notes: "Returns a Hello World!",
        tags: ["api"], // ADD THIS TAG
      },
      handler: (request, h) => {
        return "Hello World!";
      },
    };
  }

  ping() {
    return {
      path: "/ping",
      method: "GET",
      config: {
        description: "Ping",
        notes: "Returns a pong id the server it is alive",
        tags: ["api"], // ADD THIS TAG
      },
      handler: (request, h) => {
        return "pong!";
      },
    };
  }
}

module.exports = RealRoutes;
