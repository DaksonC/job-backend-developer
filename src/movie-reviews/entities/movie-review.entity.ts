import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  @CreateDateColumn({ type: 'datetime2', default: () => 'GETDATE()' })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'datetime2',
    default: () => 'GETDATE()',
    onUpdate: 'GETDATE()',
  })
  updatedAt: Date;
}
