import { Injectable, NotFoundException } from '@nestjs/common';
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
        const vaga = await this.findById(id);
        Object.assign(vaga, vagaDto);
        return this.vagaRepository.save(vaga);
    }

    async remove(id: string) {
        const vaga = await this.findById(id);
        await this.vagaRepository.remove(vaga);
        return { ...vaga, id };
    }
}
