import { Injectable } from '@nestjs/common';
import { CreateMovieReviewDto } from './dto/create-movie-review.dto';
import { FindOneOptions } from 'typeorm';
import { MovieReview } from './entities/movie-review.entity';
import { UpdateMovieReviewDto } from './dto/update-movie-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomMovieReviewRepository } from 'src/infra/repositories/movie-review.repository';

@Injectable()
export class MovieReviewsService {
  constructor(
    @InjectRepository(MovieReview)
    private readonly MovieReviewRepository: CustomMovieReviewRepository,
  ) {}

  async create(
    createMovieReviewDto: CreateMovieReviewDto,
  ): Promise<MovieReview> {
    return this.MovieReviewRepository.createMovieReview(createMovieReviewDto);
  }

  async findAll() {
    return this.MovieReviewRepository.find();
  }

  async findOne(id: string | FindOneOptions<MovieReview>) {
    return this.MovieReviewRepository.findOne({
      where: { id: String(id) },
    });
  }

  async update(id: string, updateMovieReviewDto: UpdateMovieReviewDto) {
    return this.MovieReviewRepository.updateMovieReview(
      id,
      updateMovieReviewDto,
    );
  }

  async remove(id: string) {
    await this.MovieReviewRepository.delete(id);
  }
}
