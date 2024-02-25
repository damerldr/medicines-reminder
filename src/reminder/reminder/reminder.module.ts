// reminder.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReminderController } from './reminder.controller';
import { ReminderService } from './reminder.service';
import { Reminder, ReminderSchema } from './reminder.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Reminder.name, schema: ReminderSchema }])
  ],
  controllers: [ReminderController],
  providers: [ReminderService],
})
export class ReminderModule {}
