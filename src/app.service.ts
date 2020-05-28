import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  sayHello() {
    return {
      node_env: process.env.NODE_ENV,
      port: process.env.port,
      message: 'Hello Nest from Docker!',
      time: Date.now().toString(),
    };
  }

  async fetchCountries(): Promise<any> {
    const countriesUrl = `https://restcountries.eu/rest/v2/region/africa`;
    return await this.httpService.get(countriesUrl).toPromise();
  }
}
