import { Module } from '@nestjs/common';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { MovieReview } from '../entities/movie-review.entity';

@Module({
  imports: [NestjsQueryTypeOrmModule.forFeature([MovieReview])],
})
export class MovieReviewsQueryModule {}
