import { Repository } from 'typeorm';
import { MovieReview } from '../../movie-reviews/entities/movie-review.entity';

export class CustomMovieReviewRepository extends Repository<MovieReview> {}
