import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseGuards, Query } from '@nestjs/common';
import { VagaOcupadaService } from './vaga-ocupada.service';
import { VagaOcupadaDto } from './vaga-ocupada.dto';
import { AuthGuard } from '@nestjs/passport';


@Controller('vagas-ocupadas')
export class VagaOcupadaController {
  constructor(private readonly vagaOcupadaService: VagaOcupadaService) {}

  @Post()
  @HttpCode(201)
  create(@Body() data: VagaOcupadaDto) {
    return this.vagaOcupadaService.create(data);
  }

  @Get()
  findAll(@Query('finalizada') finalizada?: string) {
    return this.vagaOcupadaService.findAll(finalizada);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.vagaOcupadaService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: VagaOcupadaDto) {
    return this.vagaOcupadaService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vagaOcupadaService.remove(id);
  }
}