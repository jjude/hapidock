# hapidock

A docker based development environment for developing [hapijs](http://hapijs.com/) applications in typescript 

<a name="objective"></a>
## Objective:
- develop in a near-production environment
- source code should be on the host, but run in container
- project dependencies (i.e: `node_modules`) should be only in container and not in host

<a name="usage"></a>
## Usage
1 - Clone hapidock repository

```
git clone https://github.com/jjude/hapidock
```

2 -  Enter the hapidock directory and bring up the container

```
docker-compose up
```

When you execute this for the first time, it will download the needed components (alpine, node, npm, hapijs etc) and build the container. Once built it will bring up the container and execute the `npm start` command.

When you run `docker-compose up` next time, it will be faster, because everything is already downloaded.

3 - Now go to `http://localhost:3000` on your host and enjoy