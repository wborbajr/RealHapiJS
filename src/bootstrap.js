"use strict";

const Hapi = require("@hapi/hapi");
const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");
const HapiSwagger = require("hapi-swagger");
const Package = require("../package.json");
const Colors = require("colors");
const Emoji = require("node-emoji");

//
const RealRoutes = require("./routes/realRoutes");
const CommonFunctions = require("./common/commonFunctions");

// Common Functions
const cf = new CommonFunctions();

const init = async () => {
  const server = Hapi.server({
    port: 3030,
    host: "localhost",
  });

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

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]);

  // mapping routes
  await server.route([...cf.mapRoutes(new RealRoutes(), RealRoutes.methods())]);

  await server.start();
  console.log(
    Emoji.get("rocket"),
    `Server running on ${server.info.uri}`.green,
    Emoji.get("rocket")
  );
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
