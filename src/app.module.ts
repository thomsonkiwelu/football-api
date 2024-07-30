import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeagueModule } from './modules/league/league.module';
import TypeOrmConfig from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    LeagueModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
