import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User) private userRepo: typeof User){}
  async create(createUserDto: CreateUserDto) {
    const newUser = await this.userRepo.create(createUserDto);
    return newUser;
  }

  async findAll() {
    const users = await this.userRepo.findAll({include: {all:true}});
  return users;
  }

  async getUserByEmail(email: string){
    const user = await this.userRepo.findOne({
      where: {email},
      include: {all:true}
    })
  
    return user
  }


}
