import { ApiProperty } from '@nestjs/swagger';

export class CreateMovieReviewDto {
  @ApiProperty({
    description: 'O título do filme',
    example: 'Black Widow',
  })
  title: string;

  @ApiProperty({
    description: 'Avaliação do usuário para o filme',
    example: 'Ótimo filme!',
  })
  notes: string;
}
