import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VeiculoEntity } from './veiculo.entity';
import { VeiculosService } from './veiculos.service';
import { VeiculosController } from './veiculos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([VeiculoEntity])],
  providers: [VeiculosService],
  controllers: [VeiculosController],
  exports: [VeiculosService],
})
export class VeiculosModule {}