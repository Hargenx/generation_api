import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PessoaModule } from './module/pessoa.module';

@Module({
  imports: [PessoaModule, TypeOrmModule.forRoot()],
})
export class AppModule {}
