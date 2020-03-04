import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      node_env: process.env.NODE_ENV,
      port: process.env.port,
      message: 'Hello Nest from Docker!',
      time: Date.now(),
    };
  }
}
