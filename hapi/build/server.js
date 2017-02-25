"use strict";
var hapi = require("hapi");
var server = new hapi.Server();
server.connection({ port: 3000 });
server.route({
    method: "GET",
    path: "/posts",
    handler: function (request, reply) {
        return reply("query parameters are: ", request.params, request.query);
    }
});
server.start(function (err) {
    if (err) {
        throw err;
    }
    console.log("server running in " + server.info.uri);
});
