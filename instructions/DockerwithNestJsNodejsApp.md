Docker with NestJs Nodejs app

1. Add Create Dockerfile
2. Add docker-compose.yml
3. Add necessary files to .gitignore
4. Add .dockerignore and unnecessary files
5. Add  nodemon-docker-debug.json
6. Add nodemon-docker-debug.json
7. Add   "debug": "nodemon -L --config nodemon-docker-debug.json" to package.json


# USING COMPOSE

## Build docker image:

```bash
$ docker-compose build
```

## Start and login to the container:

```bash
$ docker-compose up -d
$ docker-compose exec nest bash
```


## Scaffold the base project with the Nest CLI and install dependencies:

```bash
$ nest new .
$ npm install
```

# Run the app:

```bash
$ npm start
```

# USING COMPOSE

## USING DOCKER

### Build image

```bash
$ docker build -t quantumfigdev/docker-nest-js:v1.0 .
$ docker build -t quantumfigdev/docker-nest-js:latest -t quantumfigdev/docker-nest-js:v1.0 .
```

### Run the image

```bash
$ docker run -p 3000:3000 -d quantumfigdev/docker-nest-js -n docker-nest-js
$ docker run -it --rm --name my-running-app my-nodejs-app
```

### Get container ID
```bash
$ docker ps
```

### Print app output
```bash
$ docker logs <container id>
```

### Example

Running on http://localhost:3000

### Enter the container

```bash
$ docker exec -it 676d09308bcc /bin/bash
```

# Resources

https://qiita.com/rema424/items/36475ea7379e0d9c5972
Best practices: https://github.com/docker/docker-bench-security
