// medication.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MedicationDocument = Medication & Document;

@Schema({ collection: 'medications' })
export class Medication {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  dosage: string;

  @Prop({ required: true })
  frequency: string;
}

export const MedicationSchema = SchemaFactory.createForClass(Medication);
