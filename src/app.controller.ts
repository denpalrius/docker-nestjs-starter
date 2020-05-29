import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  sayHello() {
    return this.appService.sayHello();
  }

  @Get('countries')
  async fetchCountries(): Promise<any> {
    return await this.appService.fetchCountries();
  }

  @Get('api_call')
  async make_api_call(): Promise<any> {
    return await this.appService.fetchSingleCountry();
  }
}
