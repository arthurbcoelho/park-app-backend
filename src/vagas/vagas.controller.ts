import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseGuards } from '@nestjs/common';
import { VagaDto } from './vaga.dto';
import { VagasService } from './vagas.service';
import { AuthGuard } from '@nestjs/passport';


@Controller('vagas')
export class VagasController {
    constructor(private readonly vagasService: VagasService) {

    }
    
    @Post()
    @HttpCode(201)
    create(@Body() vagaDto: VagaDto) {
        return this.vagasService.create(vagaDto);
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.vagasService.findById(id);
    }

    @Get()
    findAll() {
        return this.vagasService.findAll();
    }

    @Put(':id')
    update(@Param('id') id: string) {
        return this.vagasService.remove(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.vagasService.remove(id);
    }
}
