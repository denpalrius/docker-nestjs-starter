import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  sayHello() {
    return {
      node_env: process.env.NODE_ENV,
      port: process.env.PORT,
      message: 'Hello Docker from Nest!',
      time: Date.now().toString(),
    };
  }

  async fetchCountries(): Promise<any> {
    const url = process.env.COUNTRY_LIST_API_ENDPOINT;
    const { data } = await this.httpService.get(url).toPromise();

    console.log(`There are ${data.length} countries in Africa!`);
    return data;
  }

  async fetchSingleCountry(): Promise<any> {
    const url = process.env.SINGLE_COUNTRY_API_ENDPOINT;
    console.log('url: ', url);

    const { data } = await this.httpService.get(url).toPromise();
    return data;
  }
}
