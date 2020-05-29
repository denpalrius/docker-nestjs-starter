import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setEnVars } from './envars';
import { InternalServerErrorException } from '@nestjs/common';

let server: { close: (arg0: (err: any) => void) => void };

async function bootstrap() {
  /*
    The setEnVars method uses Google Cloud Secrets to fetch for variables

    TODO: If you're not using GCP, please set the following variables in another way
    process.env.APP_NAME
    process.env.PORT
    process.env.NODE_ENV
    process.env.SINGLE_COUNTRY_API_ENDPOINT
    process.env.COUNTRY_LIST_API_ENDPOINT
  */
  const env = await setEnVars();
  if (!env) {
    throw new InternalServerErrorException();
  }

  const app = await NestFactory.create(AppModule);
  server = await app.listen(process.env.PORT);

  console.log('Application has started on ' + process.env.PORT);

  // Handle process kill signals
  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
}

function shutdown() {
  // Gracefully close outstanding HTTP connections
  server.close((err) => {
    if (err) {
      console.error(
        'An error occurred while closing the server. Forecefullly shutting down',
      );
      console.error(err);
      process.exit(1);
    }
    console.log('Http server closed.');

    // Close data connections here, eg database pool connections

    // clean up your resources and exit
    process.exit(0);
  });
}

bootstrap();
