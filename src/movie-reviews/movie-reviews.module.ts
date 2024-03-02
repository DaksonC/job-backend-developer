import { Module } from '@nestjs/common';
import { MovieReviewsService } from './movie-reviews.service';
import { MovieReviewsController } from './movie-reviews.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieReview } from './entities/movie-review.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MovieReview])],
  controllers: [MovieReviewsController],
  providers: [MovieReviewsService],
  exports: [TypeOrmModule],
})
export class MovieReviewsModule {}
