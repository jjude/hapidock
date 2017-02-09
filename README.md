# hapidoc

A docker hapijs environment

Objective:
- develop node in a near-production environment
- source code should be on the guest
- use gulp to watch for changes and restart
- node_modules should be in the host (what happens in the development when container is closed and all changes are lost?)
- if above objectives are not met, what is the benefit of container for development?

This will create a docker image where you can run gulp to run the server. node_modules is on the host.

First build the image.

```
docker build -t jjude/hapidoc .
```

then run using this.

```
docker run \
    --name "hapi" \
    -it \
    -p 3000:3000 \
    -v $(pwd):/usr/hapidoc \
    jjude/hapidoc \
    /bin/sh
```

Still to do: use docker-compose; node_modules should be in the container.