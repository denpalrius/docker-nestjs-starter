FROM node:8.10.0

# replace this with your application's default port
EXPOSE 3000

RUN mkdir -p /nest
ADD . /nest
WORKDIR /nest

RUN npm i -g @nestjs/cli