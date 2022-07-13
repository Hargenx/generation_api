import { Module } from '@nestjs/common';
import { PessoaController } from 'src/controllers/pessoa.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoaModel } from 'src/models/pessoa.model';

@Module({
  imports: [TypeOrmModule.forFeature([PessoaModel])],
  controllers: [PessoaController],
})
export class PessoaModule {}
