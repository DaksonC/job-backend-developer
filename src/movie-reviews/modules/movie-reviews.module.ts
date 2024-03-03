import { Module } from '@nestjs/common';
import { MovieReviewsService } from '../movie-reviews.service';
import { MovieReviewsController } from '../movie-reviews.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieReview } from '../entities/movie-review.entity';
import { CustomMovieReviewRepository } from 'src/movie-reviews/repositories/movie-review.repository';
import { MovieReviewsQueryModule } from './movie-reviews-query.module';

@Module({
  imports: [TypeOrmModule.forFeature([MovieReview]), MovieReviewsQueryModule],
  controllers: [MovieReviewsController],
  providers: [MovieReviewsService, CustomMovieReviewRepository],
  exports: [TypeOrmModule],
})
export class MovieReviewsModule {}
