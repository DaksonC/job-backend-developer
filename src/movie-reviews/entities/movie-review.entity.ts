import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MovieReview {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  notes: string;

  @Column({ nullable: true })
  released: string;

  @Column({ type: 'decimal', nullable: true })
  imdbRating: number;
}
