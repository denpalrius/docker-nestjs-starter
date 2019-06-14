import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TerminusModule } from '@nestjs/terminus';
import { TerminusOptionsService } from './terminus-options.service';
import { DogHealthIndicatorService } from './dog.health';
import { RedisModule } from 'nestjs-redis';

@Module({
  imports: [
    // RedisModule.register({
    //   host: process.env.REDIS_HOST,
    //   port: parseInt(process.env.REDIS_PORT),
    //   db: parseInt(process.env.REDIS_DB),
    //   password: process.env.REDIS_PASSWORD,
    //   keyPrefix: process.env.REDIS_PRIFIX,
    // } as any),
    TerminusModule.forRootAsync({
      useClass: TerminusOptionsService,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
