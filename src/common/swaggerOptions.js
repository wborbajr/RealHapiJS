const Package = require("../../package.json");

const swaggerOptions = {
  info: {
    title: "RealHapiJS API Documentation",
    version: "v: " + Package.version,
    description: "Proof of Concept with HapiJS",
    contact: {
      name: "Waldir Borba Junior",
      email: "wborbajr@gmail.com",
    },
    license: {
      name: "License " + Package.license,
    },
  },
  consumes: ["application/json"],
  produces: ["application/json"],
};

module.exports = swaggerOptions;
