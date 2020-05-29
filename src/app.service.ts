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
    const { data } = await this.httpService.get(countriesUrl).toPromise();

    console.log(`There are ${data.length} countries in Africa!`);

    return data;
  }

  async fetchAnotherAPI(): Promise<any> {
    const url = process.env.API_ENDPOINT;
    console.log('url: ', url);
    console.log('process.env: ', process.env);

    const { data } = await this.httpService.get(url).toPromise();

    console.log('data', data);

    return data;
  }
}
