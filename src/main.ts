import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { envVariables } from '@Config/env-variables';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const vars = envVariables();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(vars.port);
  console.log(`Server is running on port ${vars.port}`);
}
bootstrap();
