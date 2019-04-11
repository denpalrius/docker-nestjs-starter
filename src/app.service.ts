import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      app: 'Quantum Fig',
      message: 'Hello World from Docker!',
      time: Date.now(),
    };
  }
}
