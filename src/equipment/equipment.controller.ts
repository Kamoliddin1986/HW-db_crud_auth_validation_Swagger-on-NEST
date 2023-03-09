import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@ApiTags('Equipmentlar bulimi')
@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}
  @ApiOperation({summary: 'Equipmentlarni quwiw' })
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createEquipmentDto: CreateEquipmentDto) {
    return this.equipmentService.create(createEquipmentDto);
  }
  @ApiOperation({summary: 'Equipmentlarni Get qilish'})
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.equipmentService.findAll();
  }

}
