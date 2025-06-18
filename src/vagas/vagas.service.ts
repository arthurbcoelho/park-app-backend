import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { VagaEntity } from './vaga.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { VagaDto } from './vaga.dto';

@Injectable()
export class VagasService {
    constructor(
        @InjectRepository(VagaEntity)
        private readonly vagaRepository: Repository<VagaEntity>) { }

    async create(vagaDto: VagaDto) {
        this.validarRegrasVaga(vagaDto);
        const vaga = this.vagaRepository.create(vagaDto);
        return this.vagaRepository.save(vaga);
    }

    async findAll() {
        return await this.vagaRepository.find();
    }

    async findById(id: string) {
        const vaga = await this.vagaRepository.findOne({
            where: {
                id
            }
        });

        if (!vaga) throw new NotFoundException("Vaga não encontrada");
        return vaga;
    }

    async update(id: string, vagaDto: VagaDto) {
        this.validarRegrasVaga(vagaDto);
        const vaga = await this.findById(id);
        Object.assign(vaga, vagaDto);
        return this.vagaRepository.save(vaga);
    }

    async remove(id: string) {
        const vaga = await this.findById(id);
        await this.vagaRepository.remove(vaga);
        return { ...vaga, id };
    }

    validarCodigo(dto: VagaDto): void {
        if (!dto.codigo || dto.codigo.trim() === '') {
            throw new BadRequestException('O código da vaga é obrigatório.');
        }
    }

    validarCobertaComCamionete(dto: VagaDto): void {
        if (dto.comportaCamionete && !dto.coberta) {
            throw new BadRequestException('Vagas que comportam camionete devem ser cobertas.');
        }
    }

    validarCodigoTamanho(dto: VagaDto): void {
        if (dto.codigo.length < 2 || dto.codigo.length > 5) {
            throw new BadRequestException('O código da vaga deve ter entre 2 e 5 caracteres.');
        }
    }

    validarRegrasVaga(dto: VagaDto): void {
        this.validarCodigo(dto);
        this.validarCobertaComCamionete(dto);
        this.validarCodigoTamanho(dto);
    }
}
