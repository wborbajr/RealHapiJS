"use strict";

const Hapi = require("@hapi/hapi");

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

  // mapping routes
  server.route([...cf.mapRoutes(new RealRoutes(), RealRoutes.methods())]);

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
