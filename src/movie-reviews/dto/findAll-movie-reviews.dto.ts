// findAll-movie-reviews.dto.ts
import { IsInt, Min } from 'class-validator';

export class FindAllMovieReviewsDto {
  @IsInt()
  @Min(1)
  readonly page: number;

  @IsInt()
  @Min(1)
  readonly limit: number;
}
