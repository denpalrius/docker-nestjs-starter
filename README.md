# Runnig NestJs in a Docker Container

This is a [Nest Js](https://github.com/nestjs/nest) project configured for use with Docker

## Installation

```bash
$ npm install
```
Ensure also that [Docker is installed](https://docs.docker.com/engine/install) on your work station


## Running the app using node server (the normal way)

```bash
# development
$ npm run start:dev
or
nest start

# Debug/watch mode
$ npm run start:debug

# production mode
$ npm run build:prod
$ npm start

```

## Setting up the app for use with Docker
1. Add Create Dockerfile
2. Add docker-compose.yml
3. Add unnecessary files to .gitignore
4. Add .dockerignore and include the unnecessary files
5. Add nodemon-docker-debug.json
6. Add ```"debug": "nodemon -L --config nodemon-docker-debug.json"``` script to package.json
7. Configure VS Code for [debugging the node js app with a container](https://code.visualstudio.com/docs/containers/debug-node)


## Using Docker
```sh
# Build image
$ docker build -t docker-nest-js:v1.0 .

# Run the image interactively
$ docker run -it -p 3000:3000 docker-nest-js

# Or use the following command for images with an entrypoint
$ docker run -it --entrypoint sh docker-nest-js

```


## Using Docker Compose
Build the docker image
```sh
$ docker-compose build
```

Start and login to the container
```sh
$ docker-compose up -d
$ docker-compose exec app bash
```

Scaffold the base project with the Nest CLI and install dependencies
```sh
npm i -g @nestjs/cli
$ nest new .
$ npm install
```

Run the app
```sh
$ npm start
```

## Other useful Docker commands
Get the container ID
```sh
$ docker ps
```

View logs
```sh
$ docker logs <container id>
```

Enter the container (Use sh because bash is not installed in alpine linux by default)
```sh
$ docker exec -it <container id> /bin/sh
```

## Testing

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Resources
Tutoril: https://qiita.com/rema424/items/36475ea7379e0d9c5972  
Best practices: https://github.com/docker/docker-bench-security


## License
[MIT licensed](LICENSE)
