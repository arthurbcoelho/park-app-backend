import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VagaOcupadaEntity } from './vaga-ocupada.entity';
import { VagaOcupadaController } from './vaga-ocupada.controller';
import { VagaEntity } from '../vagas/vaga.entity';
import { VeiculoEntity } from '../veiculos/veiculo.entity';
import { VagaOcupadaService } from './vaga-ocupada.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([VagaOcupadaEntity, VagaEntity, VeiculoEntity]),
  ],
  providers: [VagaOcupadaService],
  controllers: [VagaOcupadaController],
  exports: [VagaOcupadaService],
})
export class VagaOcupadaModule {}