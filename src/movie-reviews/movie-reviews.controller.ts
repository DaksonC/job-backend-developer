import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
} from '@nestjs/common';
import { MovieReviewsService } from './movie-reviews.service';
import { CreateMovieReviewDto } from './dto/create-movie-review.dto';
import { ApiTags } from '@nestjs/swagger';
import { MovieReview } from './entities/movie-review.entity';
import { UpdateMovieReviewDto } from './dto/update-movie-review.dto';
import { FindAllMovieReviewsDto } from './dto/findAll-movie-reviews.dto';

@ApiTags('movie-reviews')
@Controller('movie-reviews')
export class MovieReviewsController {
  constructor(private readonly movieReviewsService: MovieReviewsService) {}

  @Post()
  create(
    @Body() createMovieReviewDto: CreateMovieReviewDto,
  ): Promise<MovieReview> {
    return this.movieReviewsService.create(createMovieReviewDto);
  }

  @Get()
  async findAll(
    @Query() query: FindAllMovieReviewsDto,
  ): Promise<MovieReview[]> {
    const { page, limit } = query;
    const pagination = await this.movieReviewsService.findAll(page, limit);
    return pagination.items;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movieReviewsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMovieReviewDto: UpdateMovieReviewDto,
  ) {
    return this.movieReviewsService.update(id, updateMovieReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movieReviewsService.remove(id);
  }
}
