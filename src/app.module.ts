import { Module } from '@nestjs/common';
import { MovieReviewsModule } from './movie-reviews/movie-reviews.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieReview } from './movie-reviews/entities/movie-review.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MovieReviewsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_SERVER_HOST as any,
      port: parseInt(process.env.DB_PORT as string),
      username: process.env.DB_USERNAME as string,
      password: process.env.DB_PASSWORD as string,
      database: process.env.DB_NAME as string,
      entities: [MovieReview],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
