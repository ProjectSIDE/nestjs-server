import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostgresConfig } from "../shared/database/ormconfig";



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: PostgresConfig.host,
      port: PostgresConfig.port,
      username: PostgresConfig.username,
      password: PostgresConfig.password,
      database: PostgresConfig.database,
      entities: ['../src/domain/**/models/*.entity.ts']
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
