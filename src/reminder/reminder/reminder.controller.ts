// reminder.controller.ts
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ReminderDto } from './reminder.dto';
import { ReminderService } from './reminder.service';

@Controller('reminders')
export class ReminderController {
  constructor(private readonly reminderService: ReminderService) {}

  @Post('/createReminder')
  async create(@Body() reminderDto: ReminderDto) {
    return await this.reminderService.create(reminderDto);
  }

  @Get('/findAll')
  async findAll() {
    return await this.reminderService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.reminderService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.reminderService.remove(id);
  }
}
