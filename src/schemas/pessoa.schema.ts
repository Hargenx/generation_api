import { IsString, IsInt, Min, IsDate } from 'class-validator';

export class PessoaSchema {
  @IsString()
  nome: string;
  @IsInt()
  @Min(18)
  idade: number;
  periodo: string;
  tipo_curso: string;
  @IsDate()
  data_cadastro: Date;
}
