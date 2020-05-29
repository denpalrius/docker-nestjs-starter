import { SecretManagerServiceClient } from '@google-cloud/secret-manager';
import * as dotenv from 'dotenv';

const client = new SecretManagerServiceClient({
  // TODO: Ensure to have this set up in GCP with CLOUD IAM permissions
  keyFilename: 'serverless-qa-service-account.json',
});

const name = 'projects/serverless-qa/secrets/nest-secret/versions/latest';

export async function setEnVars(): Promise<dotenv.DotenvParseOutput> {
  try {
    const [version] = await client.accessSecretVersion({
      name,
    });
    const payloadStr = version.payload.data.toString();
    const payloadBuf = Buffer.from(payloadStr.trim());

    const envConfig = dotenv.parse(payloadBuf);

    for (const [key, value] of Object.entries(envConfig)) {
      process.env[key] = value;
    }

    return envConfig;
  } catch (error) {
    console.error(error);

    return null;
  }
}
