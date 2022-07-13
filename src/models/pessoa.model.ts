import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class PessoaModel {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nome: string;
  @Column('int')
  idade: number;
  @Column()
  periodo: string;
  @Column()
  tipo_curso: string;
  @CreateDateColumn()
  data_cadastro: Date;
}
