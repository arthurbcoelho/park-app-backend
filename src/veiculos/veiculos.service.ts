import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VeiculoEntity } from './veiculo.entity';
import { VeiculoDto } from './veiculo.dto';

@Injectable()
export class VeiculosService {
    constructor(
        @InjectRepository(VeiculoEntity)
        private readonly veiculoRepository: Repository<VeiculoEntity>,
    ) { }

    async create(data: VeiculoDto) {
        this.validarRegrasVeiculo(data);
        const veiculo = this.veiculoRepository.create(data);
        return this.veiculoRepository.save(veiculo);
    }

    async findAll() {
        return this.veiculoRepository.find();
    }

    async findById(id: string) {
        const veiculo = await this.veiculoRepository.findOne({ where: { id } });
        if (!veiculo) throw new NotFoundException('Veículo não encontrado');
        return veiculo;
    }

    async update(id: string, data: VeiculoDto) {
        this.validarRegrasVeiculo(data);
        const veiculo = await this.findById(id);
        Object.assign(veiculo, data);
        return this.veiculoRepository.save(veiculo);
    }

    async remove(id: string) {
        const veiculo = await this.findById(id);
        await this.veiculoRepository.remove(veiculo);
        return { ...veiculo, id };
    }

    validarPlaca(dto: VeiculoDto): void {
        if (!dto.placa || dto.placa.length !== 7) {
            throw new BadRequestException('A placa deve conter exatamente 7 caracteres.');
        }
    }

    validarNomeProprietario(dto: VeiculoDto): void {
        if (!dto.nomeProprietario || dto.nomeProprietario.trim() === '') {
            throw new BadRequestException('O nome do proprietário é obrigatório.');
        }
    }

    validarMarcaId(dto: VeiculoDto): void {
        if (!dto.marcaId || dto.marcaId <= 0) {
            throw new BadRequestException('O campo marcaId deve ser maior que zero.');
        }
    }

    validarRegrasVeiculo(dto: VeiculoDto): void {
        this.validarPlaca(dto);
        this.validarNomeProprietario(dto);
        this.validarMarcaId(dto);
    }
}