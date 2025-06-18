import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class VeiculoDto {
    @IsOptional()
    @IsInt({ message: 'O campo id deve ser um número inteiro' })
    id?: number;

    @IsString({ message: 'O campo modelo deve ser uma string' })
    @IsNotEmpty({ message: 'O campo modelo é obrigatório' })
    modelo: string;

    @IsInt({ message: 'O campo marcaId deve ser um número inteiro' })
    marcaId: number;

    @IsString({ message: 'O campo marcaNome deve ser uma string' })
    marcaNome: string;

    @IsInt({ message: 'O campo tipoId deve ser um número inteiro' })
    tipoId: number;

    @IsString({ message: 'O campo tipoNome deve ser uma string' })
    tipoNome: string;

    @IsString({ message: 'O campo placa deve ser uma string' })
    @IsNotEmpty({ message: 'O campo placa é obrigatório' })
    placa: string;

    @IsString({ message: 'O campo cor deve ser uma string' })
    @IsNotEmpty({ message: 'O campo cor é obrigatório' })
    cor: string;

    @IsString({ message: 'O campo nomeProprietario deve ser uma string' })
    @IsNotEmpty({ message: 'O campo nomeProprietario é obrigatório' })
    nomeProprietario: string;

    @IsString({ message: 'O campo contatoProprietario deve ser uma string' })
    @IsNotEmpty({ message: 'O campo contatoProprietario é obrigatório' })
    contatoProprietario: string;
}