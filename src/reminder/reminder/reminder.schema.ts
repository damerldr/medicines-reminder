// reminder.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'reminders' })
export class Reminder extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  medicationId: string;

  @Prop({ required: true })
  reminderTime: Date;
}

export const ReminderSchema = SchemaFactory.createForClass(Reminder);
