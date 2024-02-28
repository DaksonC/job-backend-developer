import { Module } from '@nestjs/common';
import { MovieReviewsModule } from './movie-reviews/movie-reviews.module';

@Module({
  imports: [MovieReviewsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
