import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VeiculoEntity } from './veiculo.entity';

@Injectable()
export class VeiculosService {
    constructor(
        @InjectRepository(VeiculoEntity)
        private readonly veiculoRepository: Repository<VeiculoEntity>,
    ) { }

    async create(data: Partial<VeiculoEntity>) {
        const veiculo = this.veiculoRepository.create(data);
        return this.veiculoRepository.save(veiculo);
    }

    async findAll() {
        return this.veiculoRepository.find();
    }

    async findById(id: number) {
        const veiculo = await this.veiculoRepository.findOne({ where: { id } });
        if (!veiculo) throw new NotFoundException('Veículo não encontrado');
        return veiculo;
    }

    async update(id: number, data: Partial<VeiculoEntity>) {
        const veiculo = await this.findById(id);
        Object.assign(veiculo, data);
        return this.veiculoRepository.save(veiculo);
    }

    async remove(id: number) {
        const veiculo = await this.findById(id);
        await this.veiculoRepository.remove(veiculo);
        return { ...veiculo, id };
    }
}