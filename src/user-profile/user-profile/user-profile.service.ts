// user-profile.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserProfileDto } from './user-profile.dto';
import { UserProfile } from './user-profile.entity';

@Injectable()
export class UserProfileService {
constructor(
        @InjectModel(UserProfile.name) private userProfileModel: Model<UserProfile>,
    ) {}
    
  async findByUsername(username: string): Promise<UserProfile> {
    return await this.userProfileModel.findOne({ username }).exec();
  }
  async create(userProfileDto: UserProfileDto): Promise<UserProfile> {
    const createdUserProfile = new this.userProfileModel(userProfileDto);
    return await createdUserProfile.save();
  }

  async findAll(): Promise<UserProfile[]> {
    return await this.userProfileModel.find().exec();
  }

  async findOne(id: string): Promise<UserProfile> {
    return await this.userProfileModel.findById(id).exec();
  }

  async remove(id: string): Promise<UserProfile> {
    return await this.userProfileModel.findByIdAndDelete(id);
  }
}
