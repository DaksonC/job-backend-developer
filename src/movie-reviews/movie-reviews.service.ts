import { Injectable } from '@nestjs/common';
import { CreateMovieReviewDto } from './dto/create-movie-review.dto';
import { MovieReview } from './entities/movie-review.entity';
import { UpdateMovieReviewDto } from './dto/update-movie-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';
import axios from 'axios';

@Injectable()
export class MovieReviewsService extends TypeOrmQueryService<MovieReview> {
  constructor(
    @InjectRepository(MovieReview)
    private movieReviewRepository: Repository<MovieReview>,
  ) {
    super(movieReviewRepository);
  }

  // async create(
  //   createMovieReviewDto: CreateMovieReviewDto,
  // ): Promise<MovieReview> {
  //   return this.movieReviewRepository.save(createMovieReviewDto);
  // }
  async create(
    createMovieReviewDto: CreateMovieReviewDto,
  ): Promise<MovieReview> {
    const { title, notes } = createMovieReviewDto;
    const omdbApiKey = 'aa9290ba';
    const omdbUrl = `http://www.omdbapi.com/?apikey=${omdbApiKey}&t=${encodeURIComponent(title)}`;

    try {
      const { data } = await axios.get(omdbUrl);
      const { Released, imdbRating } = data;

      const movieReview = this.movieReviewRepository.create({
        title,
        notes,
        released: Released,
        imdbRating: parseFloat(imdbRating),
      });

      return await this.movieReviewRepository.save(movieReview);
    } catch (error) {
      console.error(
        'Erro ao obter informações do filme na API do OMDB:',
        error,
      );
      throw new Error('Erro ao obter informações do filme na API do OMDB');
    }
  }

  async findAll(page = 1, limit = 10): Promise<Pagination<MovieReview>> {
    return paginate<MovieReview>(this.movieReviewRepository, { page, limit });
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
