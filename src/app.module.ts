import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicationModule } from './medication/medication/medication.module';
import { ReminderModule } from './reminder/reminder/reminder.module';
import { UserProfileModule } from './user-profile/user-profile/user-profile.module';
import { AuthModule } from './auth/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/medications'),
    MedicationModule,
    ReminderModule,
    UserProfileModule,
    AuthModule,
  ],
})
export class AppModule {}