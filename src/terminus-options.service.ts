import {
  TerminusEndpoint,
  TerminusOptionsFactory,
  DNSHealthIndicator,
  TerminusModuleOptions,
} from '@nestjs/terminus';
import { Injectable } from '@nestjs/common';
import { DogHealthIndicatorService } from './dog.health';

@Injectable()
export class TerminusOptionsService implements TerminusOptionsFactory {
  constructor(
    private readonly dns: DNSHealthIndicator, // private readonly dogHealthIndicator: DogHealthIndicatorService,
  ) {}

  createTerminusOptions(): TerminusModuleOptions {
    const healthEndpoint: TerminusEndpoint = {
      url: '/health',
      healthIndicators: [
        async () => this.dns.pingCheck('quantumfig', 'https://quantumfig.com/'),

        // async () => this.dogHealthIndicatorss.isHealthy('dog'),
      ],
    };
    return {
      endpoints: [healthEndpoint],
    };
  }
}
