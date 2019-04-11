import { Injectable } from '@nestjs/common';
import { HealthCheckError } from '@godaddy/terminus';
import { HealthIndicatorResult, HealthIndicator } from '@nestjs/terminus';

export interface Dog {
  name: string;
  type: string;
}

@Injectable()
export class DogHealthIndicatorService extends HealthIndicator {
  private readonly dogs: Dog[] = [
    { name: 'Fido', type: 'goodboy' },
    { name: 'Rex', type: 'badboy' },
  ];

  async isHealthy(key: string): Promise<HealthIndicatorResult> {
    const badboys = this.dogs.filter(dog => dog.type === 'badboy');
    const isHealthy = badboys.length > 0;
    const result = this.getStatus(key, isHealthy, { badboys: badboys.length });

    if (isHealthy) {
      return result;
    }
    throw new HealthCheckError('Dogcheck failed', result);
  }
}
