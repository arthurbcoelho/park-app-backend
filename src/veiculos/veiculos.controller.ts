import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { VeiculosService } from './veiculos.service';
import { VeiculoDto } from './veiculo.dto';

@Controller('veiculos')
export class VeiculosController {
    constructor(private readonly veiculosService: VeiculosService) { }

    @Post()
    @HttpCode(201)
    create(@Body() data: VeiculoDto) {
        return this.veiculosService.create(data);
    }

    @Get()
    findAll() {
        return this.veiculosService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.veiculosService.findById(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: VeiculoDto) {
        return this.veiculosService.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.veiculosService.remove(id);
    }
}