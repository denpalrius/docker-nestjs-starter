import {
  TerminusEndpoint,
  TerminusOptionsFactory,
  DNSHealthIndicator,
  TerminusModuleOptions,
  DiskHealthIndicator,
} from '@nestjs/terminus';
import { Injectable } from '@nestjs/common';
import { DogHealthIndicatorService } from './dog.health';

@Injectable()
export class TerminusOptionsService implements TerminusOptionsFactory {
  constructor(
    private readonly dNSHealthIndicator: DNSHealthIndicator, // private readonly dogHealthIndicator: DogHealthIndicatorService,
    private readonly diskHealthIndicator: DiskHealthIndicator,
  ) {}

  createTerminusOptions(): TerminusModuleOptions {
    const healthEndpoint: TerminusEndpoint = {
      url: '/health',
      healthIndicators: [
        async () =>
          this.dNSHealthIndicator.pingCheck(
            'Orteo API',
            'https://api.orteo.co',
          ),
        async () =>
          this.diskHealthIndicator.checkStorage('storage', {
            thresholdPercent: 0.5,
            path: 'C:\\',
          }),

        // async () => this.dogHealthIndicatorss.isHealthy('dog'),
      ],
    };
    return {
      endpoints: [healthEndpoint],
    };
  }
}
