import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      app: 'Quantum Fig',
      node_env: process.env.NODE_ENV,
      port: process.env.port,
      soap_port: process.env.soap_port,
      message: 'Hello World from Docker!',
      time: Date.now(),
    };
  }
}
