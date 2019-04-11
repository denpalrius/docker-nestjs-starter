import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TerminusModule } from '@nestjs/terminus';
import { TerminusOptionsService } from './terminus-options.service';
import { DogHealthIndicatorService } from './dog.health';

@Module({
  imports: [
    TerminusModule.forRootAsync({
      useClass: TerminusOptionsService,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
