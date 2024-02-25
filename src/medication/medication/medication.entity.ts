  // medication.entity.ts
  import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
  import { Document } from 'mongoose';
  
  @Schema()
  export class Medication extends Document {
    @Prop({ required: true })
    name: string;
  
    @Prop({ required: true })
    dosage: string;
  
    @Prop({ required: true })
    frequency: string;
  }
  
  export const MedicationSchema = SchemaFactory.createForClass(Medication);