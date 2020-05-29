import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setEnVars } from './envars';
import { InternalServerErrorException } from '@nestjs/common';

let server: { close: (arg0: (err: any) => void) => void };

const port = Number(process.env.PORT) || 3000;

async function bootstrap() {
  const env = await setEnVars();
  if (!env) {
    throw new InternalServerErrorException();
  }

  const app = await NestFactory.create(AppModule);
  server = await app.listen(port);

  console.log('Application has started on ' + port);

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
