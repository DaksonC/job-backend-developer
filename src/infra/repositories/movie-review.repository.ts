import { Repository } from 'typeorm';
import { MovieReview } from '../../movie-reviews/entities/movie-review.entity';
import { CreateMovieReviewDto } from '../../movie-reviews/dto/create-movie-review.dto';
import axios from 'axios';
import { UpdateMovieReviewDto } from '../../movie-reviews/dto/update-movie-review.dto';

export class CustomMovieReviewRepository extends Repository<MovieReview> {
  async find(): Promise<MovieReview[]> {
    return this.createQueryBuilder('movieReview').getMany();
  }
  async createMovieReview(
    createMovieReviewDto: CreateMovieReviewDto,
  ): Promise<MovieReview> {
    const { title, notes } = createMovieReviewDto;
    const omdbApiKey = 'aa9290ba';
    const omdbUrl = `http://www.omdbapi.com/?apikey=${omdbApiKey}&t=${encodeURIComponent(title)}`;

    try {
      const { data } = await axios.get(omdbUrl);
      const { Released, imdbRating } = data;

      const movieReview = this.create({
        title,
        notes,
        released: Released,
        imdbRating: parseFloat(imdbRating),
      });

      return await this.save(movieReview);
    } catch (error) {
      console.error(
        'Erro ao obter informações do filme na API do OMDB:',
        error,
      );
      throw new Error('Erro ao obter informações do filme na API do OMDB');
    }
  }

  async updateMovieReview(
    id: string,
    updateMovieReviewDto: UpdateMovieReviewDto,
  ): Promise<MovieReview> {
    await this.update(id, updateMovieReviewDto);
    return await this.findOne({ where: { id: String(id) } });
  }
}
