import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Documentação com Swagger - Teste Backend Dolado')
  .setDescription(
    'Este é o teste que nós da Dolado usamos para avaliar os candidatos de vagas para Backend. Do júnior ao sênior, todos são avaliados pelo mesmo teste mas por critérios distintos.',
  )
  .setVersion('1.0')
  .build();
