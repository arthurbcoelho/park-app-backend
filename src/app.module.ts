import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VagasModule } from './vagas/vagas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { VeiculosModule } from './veiculos/veiculos.module';
import { VagaOcupadaModule } from './vaga-ocupada/vaga-ocupada.module';

@Module({
    imports: [VagasModule, 
        TypeOrmModule.forRoot(dataSourceOptions), VeiculosModule, VagaOcupadaModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
