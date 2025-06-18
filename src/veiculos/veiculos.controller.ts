import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { VeiculosService } from './veiculos.service';
import { VeiculoEntity } from './veiculo.entity';

@Controller('veiculos')
export class VeiculosController {
    constructor(private readonly veiculosService: VeiculosService) { }

    @Post()
    @HttpCode(201)
    create(@Body() data: Partial<VeiculoEntity>) {
        return this.veiculosService.create(data);
    }

    @Get()
    findAll() {
        return this.veiculosService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number) {
        return this.veiculosService.findById(Number(id));
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() data: Partial<VeiculoEntity>) {
        return this.veiculosService.update(Number(id), data);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.veiculosService.remove(Number(id));
    }
}