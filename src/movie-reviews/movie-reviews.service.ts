import { Injectable } from '@nestjs/common';
import { CreateMovieReviewDto } from './dto/create-movie-review.dto';
import { FindOneOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieReview } from './entities/movie-review.entity';
import axios from 'axios';
import { UpdateMovieReviewDto } from './dto/update-movie-review.dto';

@Injectable()
export class MovieReviewsService {
  constructor(
    @InjectRepository(MovieReview)
    private readonly movieReviewRepository: Repository<MovieReview>,
  ) {}

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

  async findAll() {
    return this.movieReviewRepository.find();
  }

  async findOne(id: string | FindOneOptions<MovieReview>) {
    return this.movieReviewRepository.findOne({ where: { id: String(id) } });
  }

  async update(id: string, updateMovieReviewDto: UpdateMovieReviewDto) {
    await this.movieReviewRepository.update(id, updateMovieReviewDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.movieReviewRepository.delete(id);
  }
}
