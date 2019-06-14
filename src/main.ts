import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as LogRocket from 'logrocket';

LogRocket.init('v5s4eb/qf-dev');

async function bootstrap() {
  LogRocket.identify('Mzitoh', {
    name: 'Dennoh Mzitoh',
    email: 'denno@mzitoh.com',
    subscriptionType: 'pro',
  });

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
