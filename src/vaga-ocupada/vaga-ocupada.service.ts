import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VagaOcupadaEntity } from './vaga-ocupada.entity';
import { VagaOcupadaDto } from './vaga-ocupada.dto';

@Injectable()
export class VagaOcupadaService {
    constructor(
        @InjectRepository(VagaOcupadaEntity)
        private readonly vagaOcupadaRepository: Repository<VagaOcupadaEntity>,
    ) { }

    async create(data: VagaOcupadaDto) {
        this.validarPrecos(data);
        const vagaOcupada = this.vagaOcupadaRepository.create(data);
        return this.vagaOcupadaRepository.save(vagaOcupada);
    }

    async findAll(finalizada?: string) {
        const where: any = {};
        if (finalizada !== undefined) {
            where.finalizada = finalizada === 'true';
        }
        return this.vagaOcupadaRepository.find({ where, relations: ['vaga', 'veiculo'] });
    }

    async findById(id: string) {
        const vagaOcupada = await this.vagaOcupadaRepository.findOne({
            where: { id },
            relations: ['vaga', 'veiculo'],
        });
        if (!vagaOcupada) throw new NotFoundException('Vaga ocupada não encontrada');
        return vagaOcupada;
    }

    async update(id: string, data: VagaOcupadaDto) {
        this.validarPrecos(data);
        const vagaOcupada = await this.findById(id);
        Object.assign(vagaOcupada, data);
        return this.vagaOcupadaRepository.save(vagaOcupada);
    }

    async remove(id: string) {
        const vagaOcupada = await this.findById(id);
        await this.vagaOcupadaRepository.remove(vagaOcupada);
        return { ...vagaOcupada, id };
    }

    validarPrecoFixoOuPrecoHora(dto: VagaOcupadaDto): void {
        const temPrecoHora = dto.precoHora !== null && dto.precoHora !== undefined;
        const temPrecoFixo = dto.precoFixo !== null && dto.precoFixo !== undefined;

        if ((temPrecoHora && temPrecoFixo) || (!temPrecoHora && !temPrecoFixo)) {
            throw new BadRequestException('Preencha apenas um dos campos: precoHora ou precoFixo.');
        }
    }

    validarPrecoHoraDto(dto: VagaOcupadaDto): void {
        if (dto.precoHora === null || dto.precoHora === undefined || dto.precoHora <= 0) {
            throw new BadRequestException('O preço por hora deve ser maior que zero');
        }
    }

    validarPrecoFixoDto(dto: VagaOcupadaDto): void {
        if (dto.precoFixo === null || dto.precoFixo === undefined || dto.precoFixo <= 0) {
            throw new BadRequestException('O preço fixo deve ser maior que zero');
        }
    }

    validarPrecos(dto: VagaOcupadaDto): void {
        this.validarPrecoFixoOuPrecoHora(dto);

        const temPrecoFixo = dto.precoFixo !== null && dto.precoFixo !== undefined;

        if (temPrecoFixo) {
            this.validarPrecoFixoDto(dto);
        } else {
            this.validarPrecoHoraDto(dto);
        }
    }
}