import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMovieReviewDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'O título do filme',
    example: 'Black Widow',
  })
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Comentário do usuário sobre o filme',
    example: 'Ótimo filme!',
  })
  readonly notes: string;
}
