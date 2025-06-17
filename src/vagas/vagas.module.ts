import { Module } from '@nestjs/common';
import { VagasService } from './vagas.service';
import { VagasController } from './vagas.controller';

@Module({
  providers: [VagasService],
  controllers: [VagasController]
})
export class VagasModule {}
