import { Injectable } from '@nestjs/common';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { Equipment } from './models/equipment.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class EquipmentService {
  constructor(
    @InjectModel(Equipment) private EquipRepo: typeof Equipment){}
  async create(createEquipmentrDto: CreateEquipmentDto) {
    const newEquipment = await this.EquipRepo.create(createEquipmentrDto);
    return newEquipment;
  }

  async findAll() {
    const equip = await this.EquipRepo.findAll({include: {all:true}});
  return equip;
  }
}
