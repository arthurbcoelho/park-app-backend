import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class VagaOcupadaDto {
  @IsOptional()
  @IsUUID('4', { message: 'O campo id deve ser um UUID' })
  id?: string;

  @IsUUID('4', { message: 'O campo vagaId deve ser um UUID' })
  vagaId: string;

  @IsString({ message: 'O campo vagaCodigo deve ser uma string' })
  vagaCodigo: string;

  @IsNumber({}, { message: 'O campo veiculoId deve ser um número' })
  veiculoId: number;

  @IsString({ message: 'O campo placaVeiculo deve ser uma string' })
  placaVeiculo: string;

  @IsDateString({}, { message: 'O campo horaInicio deve ser uma data válida' })
  horaInicio: Date;

  @IsOptional()
  @IsDateString({}, { message: 'O campo horaFim deve ser uma data válida' })
  horaFim?: Date;

  @IsNumber({}, { message: 'O campo precoHora deve ser um número' })
  precoHora: number;

  @IsNumber({}, { message: 'O campo precoTotal deve ser um número' })
  precoTotal: number;

  @IsBoolean({ message: 'O campo finalizada deve ser booleano' })
  finalizada: boolean;

  @IsNumber({}, { message: 'O campo precoFixo deve ser um número' })
  precoFixo: number;
}