// medication.controller.ts
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { MedicationDto } from './medication.dto';
import { MedicationService } from './medication.service';

@Controller('medications')
export class MedicationController {
  constructor(private readonly medicationService: MedicationService) {}

  @Post('/create')
  async create(@Body() medicationDto: MedicationDto) {
    return await this.medicationService.create(medicationDto);
  }

  @Get('/findAll')
  async findAll() {
    return await this.medicationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.medicationService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.medicationService.remove(id);
  }
}
