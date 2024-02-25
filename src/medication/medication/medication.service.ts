// medication.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MedicationDto } from './medication.dto';
import { Medication } from './medication.entity';

@Injectable()
export class MedicationService {
  constructor(
    @InjectModel(Medication.name) private medicationModel: Model<Medication>,
  ) {}

  async create(medicationDto: MedicationDto): Promise<Medication> {
    const createdMedication = new this.medicationModel(medicationDto);
    return await createdMedication.save();
  }

  async findAll(): Promise<Medication[]> {
    return await this.medicationModel.find().exec();
  }

  async findOne(_id: string): Promise<Medication> {
    return await this.medicationModel.findById(_id).exec();
  }

  async remove(_id: string): Promise<Medication> {
    return await this.medicationModel.findByIdAndDelete(_id);
  }
}
