"use strict";
var hapi = require("hapi");
var server = new hapi.Server();
server.connection({ port: 3000 });
server.route({
    method: "GET",
    path: "/",
    handler: function (request, reply) {
        reply("Hello World");
    }
});
server.start(function (err) {
    if (err) {
        throw err;
    }
    console.log("server running at " + server.info.uri);
});
