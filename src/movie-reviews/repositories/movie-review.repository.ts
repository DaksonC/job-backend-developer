import { Repository } from 'typeorm';
import { MovieReview } from '../entities/movie-review.entity';

export class CustomMovieReviewRepository extends Repository<MovieReview> {}
