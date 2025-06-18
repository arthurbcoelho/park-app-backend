import { Module } from '@nestjs/common';
import { VagasService } from './vagas.service';
import { VagasController } from './vagas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VagaEntity } from './vaga.entity';

@Module({
    imports: [TypeOrmModule.forFeature([VagaEntity])],
  providers: [VagasService],
  controllers: [VagasController]
})
export class VagasModule {}
