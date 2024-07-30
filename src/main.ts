import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import {  config as dotEnvConfig } from 'dotenv';
import constants from './config/constant.config';

dotEnvConfig({ path: '.env' });
const { APP_PORT } = constants;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(APP_PORT);
  Logger.log(`application is running on port ${APP_PORT}...`);
}

bootstrap();
