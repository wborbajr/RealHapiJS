"use strict";

const Hapi = require("@hapi/hapi");
const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");
const HapiSwagger = require("hapi-swagger");
const Colors = require("colors");
const Emoji = require("node-emoji");

//
const RealRoutes = require("./routes/realRoutes");
const CommonFunctions = require("./common/commonFunctions");
const SwaggerOptions = require("./common/swaggerOptions");

const init = async () => {
  const server = Hapi.server({
    port: 3030,
    host: "localhost",
  });

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: SwaggerOptions,
    },
  ]);

  // mapping routes
  await server.route([
    ...CommonFunctions.mapRoutes(new RealRoutes(), RealRoutes.methods()),
  ]);

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
