import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VagaOcupadaEntity } from './vaga-ocupada.entity';
import { VagaOcupadaDto } from './vaga-ocupada.dto';

@Injectable()
export class VagaOcupadaService {
  constructor(
    @InjectRepository(VagaOcupadaEntity)
    private readonly vagaOcupadaRepository: Repository<VagaOcupadaEntity>,
  ) {}

  async create(data: VagaOcupadaDto) {
    const vagaOcupada = this.vagaOcupadaRepository.create(data);
    return this.vagaOcupadaRepository.save(vagaOcupada);
  }

  async findAll() {
    return this.vagaOcupadaRepository.find({ relations: ['vaga', 'veiculo'] });
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
    const vagaOcupada = await this.findById(id);
    Object.assign(vagaOcupada, data);
    return this.vagaOcupadaRepository.save(vagaOcupada);
  }

  async remove(id: string) {
    const vagaOcupada = await this.findById(id);
    await this.vagaOcupadaRepository.remove(vagaOcupada);
    return { ...vagaOcupada, id };
  }
}