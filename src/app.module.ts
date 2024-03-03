import { Module } from '@nestjs/common';
import { MovieReviewsModule } from './movie-reviews/movie-reviews.module';
import { DatabaseMsSQLModule } from './infra/database/mssql.module';

@Module({
  imports: [MovieReviewsModule, DatabaseMsSQLModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
