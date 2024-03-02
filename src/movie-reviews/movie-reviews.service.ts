import { Injectable } from '@nestjs/common';
import { CreateMovieReviewDto } from './dto/create-movie-review.dto';
import { MovieReview } from './entities/movie-review.entity';
import { UpdateMovieReviewDto } from './dto/update-movie-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MovieReviewsService {
  constructor(
    @InjectRepository(MovieReview)
    private movieReviewRepository: Repository<MovieReview>,
  ) {}

  async create(
    createMovieReviewDto: CreateMovieReviewDto,
  ): Promise<MovieReview> {
    return this.movieReviewRepository.save(createMovieReviewDto);
  }

  async findAll() {
    return this.movieReviewRepository.find();
  }

  async findOne(id: string) {
    return this.movieReviewRepository.findOneBy({ id: id });
  }

  async update(id: string, updateMovieReviewDto: UpdateMovieReviewDto) {
    return this.movieReviewRepository.update(id, updateMovieReviewDto);
  }

  async remove(id: string) {
    await this.movieReviewRepository.delete(id);
  }
}
