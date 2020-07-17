const BaseRoute = require("./base/baseRoute");

class RealRoutes extends BaseRoute {
  default() {
    return {
      path: "/",
      method: "GET",
      options: {
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

// {
//   method: 'PUT',
//   path: '/store/{id}',
//   options: {
//       handler: handlers.storeUpdate,
//       plugins: {
//           'hapi-swagger': {
//               responses: {
//                   '400': {
//                       'description': 'BadRequest'
//                   }
//               },
//               payloadType: 'form'
//           }
//       },
//       tags: ['api'],
//       validate: {
//           payload: Joi.object({
//               a: Joi.number().required().description('the first number')
//           })
//       }
//   }
// }
