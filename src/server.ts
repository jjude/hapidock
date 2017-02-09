"use strict";

import * as hapi from "hapi";

const server: hapi.Server = new hapi.Server()
server.connection({ port: 3000 });

server.route({
	method: "GET",
	path: "/",
	handler: (request: hapi.Request, reply: hapi.IReply) => {
		reply("Hello World")
	}
	
});

server.start((err) => {
	if (err) {
		throw err;
	}
	console.log("server running at " + server.info.uri) ;
})