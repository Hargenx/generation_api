import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PessoaModel } from 'src/models/pessoa.model';
import { PessoaSchema } from 'src/schemas/pessoa.schema';
import { Repository } from 'typeorm';

@Controller('/pessoa')
export class PessoaController {
  constructor(
    @InjectRepository(PessoaModel) private model: Repository<PessoaModel>,
  ) {}

  @Post()
  public async create(@Body() body: PessoaSchema): Promise<PessoaModel> {
    return this.model.save(body);
  }

  @Get(':id')
  public async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<PessoaModel> {
    const pessoa = await this.model.findOne({ where: { id } });
    if (!pessoa) {
      throw new NotFoundException(`Aluno id: ${id}, não encontrado.`);
    }
    return pessoa;
  }

  @Get()
  public async getAll(): Promise<PessoaModel[]> {
    return this.model.find();
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: PessoaSchema,
  ): Promise<PessoaModel> {
    const pessoa = await this.model.findOne({ where: { id } });
    if (!pessoa) {
      throw new NotFoundException(`Aluno id: ${id}, não encontrado.`);
    }

    await this.model.update({ id }, body);
    return await this.model.findOne({ where: { id } });
  }

  @Delete(':id')
  public async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
    const pessoa = await this.model.findOne({ where: { id } });
    if (!pessoa) {
      throw new NotFoundException(`Aluno id: ${id}, não encontrado.`);
    }
    this.model.delete(id);
    return `A pessoa com id ${id} foi excluido com sucesso`;
  }
}
