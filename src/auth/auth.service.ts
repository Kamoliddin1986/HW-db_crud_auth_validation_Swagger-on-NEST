import { UsersService } from './../users/users.service';
import { CreateUserDto } from './../users/dto/create-user.dto';
import { Injectable,HttpException, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt/dist';
import * as bcrypt from 'bcryptjs'
import { User } from 'src/users/models/user.model';
// import { LoginDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
constructor( private readonly userService: UsersService, private readonly jwtService: JwtService) {}

  async registration(userDto: CreateUserDto) {
    const condidate = await this.userService.getUserByEmail(userDto.email);
    if(condidate) {
      throw new HttpException(
        'Bunday foydalanuvchi mavjud',
        HttpStatus.BAD_REQUEST,
      );
    }
    const hashedPassword = await bcrypt.hash(userDto.password,7)
    const user = await this.userService.create({
      ...userDto,
      password: hashedPassword,
    });
    
    const payload = { email: user.email,  id: user.id};
     return{ token: this.jwtService.sign(payload)}


  }

  // private async generateToken(user: User){
    
  // }

  // private async validateUser(loginDto: LoginDto){
  //   const user = await this.userService.getUserByEmail(loginDto.email);
  //   if(!user){
  //     throw new UnauthorizedException("Email yoki Parl notogri");
  //   }

  //   const validPassword = await bcrypt.compare(
  //     loginDto.password,
  //     user.password
  //   );

  //   if(validPassword){
  //     return user;
  //   }
  //   throw new UnauthorizedException("Email yoki Parl notogri");
  // }
  

  // async login(loginDto: LoginDto){
  //   const user = await this.validateUser(loginDto);
  //   if(!user) {
  //     throw new HttpException('Foydalanub=vchi yuq', HttpStatus.NOT_FOUND)
  //   }
  //   return this.generateToken(user)
  // }
  
}
