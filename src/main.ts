import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

let server: { close: (arg0: (err: any) => void) => void };

console.log('process.env.API_ENDPOINT: ', process.env.API_ENDPOINT);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  server = await app.listen(3000);

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
