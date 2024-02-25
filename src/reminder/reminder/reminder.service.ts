// reminder.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReminderDto } from './reminder.dto';
import { Reminder } from './reminder.entity';

@Injectable()
export class ReminderService {
  constructor(
    @InjectModel(Reminder.name) private reminderModel: Model<Reminder>,
  ) {}

  async create(reminderDto: ReminderDto): Promise<Reminder> {
    const createdReminder = new this.reminderModel(reminderDto);
    return await createdReminder.save();
  }

  async findAll(): Promise<Reminder[]> {
    return await this.reminderModel.find().exec();
  }

  async findOne(id: string): Promise<Reminder> {
    return await this.reminderModel.findById(id).exec();
  }

  async remove(id: string): Promise<Reminder> {
    return await this.reminderModel.findByIdAndDelete(id);
  }
}
