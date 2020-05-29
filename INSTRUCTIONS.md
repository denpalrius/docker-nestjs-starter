# Runnig NestJs in a Docker Container

### Set up the file structure
1. Add Create Dockerfile
2. Add docker-compose.yml
3. Add unnecessary files to .gitignore
4. Add .dockerignore and include the unnecessary files
5. Add nodemon-docker-debug.json
6. Add ```"debug": "nodemon -L --config nodemon-docker-debug.json"``` script to package.json


## Using Docker Compose
a. Build docker image
```sh
$ docker-compose build
```

b. Start and login to the container\s\s
```sh
$ docker-compose up -d
$ docker-compose exec nest bash
```

Scaffold the base project with the Nest CLI and install dependencies
```sh
$ nest new .
$ npm install
```

Run the app
```sh
$ npm start
```

<br />

## Using Docker
Build image
```sh
$ docker build -t docker-nest-js:v1.0 .
```
or
```sh
$ docker build -t docker-nest-js:latest -t docker-nest-js:v1.0 .
```

Run the image
```sh
$ docker run -p 3000:3000 -d docker-nest-js -n docker-nest-js
```
or interactively(-it), ensuring it is deleted after Docker is closed(--rm)
```sh
$ docker run -it --rm --name docker-nest-js docker-nest-js sh
```
Or following for images with an entrypoint
```sh
$ docker run -it --entrypoint sh docker-nest-js
```

## Get container ID
```sh
$ docker ps
```

## Print app output
```sh
$ docker logs <container id>
```

## Enter the container
```sh
$ docker exec -it <container id> /bin/bash
```

## Resources
Tutoril: https://qiita.com/rema424/items/36475ea7379e0d9c5972  
Best practices: https://github.com/docker/docker-bench-security

<br />
<br />
