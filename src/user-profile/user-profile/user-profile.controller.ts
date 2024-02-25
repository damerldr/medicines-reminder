// user-profile.controller.ts
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserProfileDto } from './user-profile.dto';
import { UserProfileService } from './user-profile.service';

@Controller('user-profiles')
export class UserProfileController {
  constructor(private readonly userProfileService: UserProfileService) {}

  @Post('/createUser')
  async create(@Body() userProfileDto: UserProfileDto) {
    return await this.userProfileService.create(userProfileDto);
  }

  @Get('/findAll')
  async findAll() {
    return await this.userProfileService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userProfileService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.userProfileService.remove(id);
  }
}
