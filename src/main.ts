import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { envVariables } from '@Config/env-variables';

import { AppModule } from './app.module';

const vars = envVariables();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(vars.port);
  app.enableCors();
  console.log(`Server is running on port ${vars.port}`);
}
bootstrap();
