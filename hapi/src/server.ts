"use strict";

import * as hapi from "hapi";

const server: hapi.Server = new hapi.Server()
server.connection({ port: 3000 });

server.route({
	method: "GET",
  path: "/posts",
	handler: (request: hapi.Request, reply: hapi.IReply) => {
		return reply("query parameters are: ", request.params, request.query);
	}
});

server.start((err) => {
	if (err) {
		throw err;
	}
	console.log("server running in " + server.info.uri) ;
})

