import { ApiProperty } from '@nestjs/swagger';
import {IsNotEmpty, IsString, IsStrongPassword, MinLength,IsEmail} from 'class-validator'



export class CreateUserDto {

    @ApiProperty({example: 'Ismigul', description: "foydalanuvchi Ismi"})
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @ApiProperty({example: 'ismidul@email.ru', description: "foydalanuvchi emaili"})
    @IsEmail()
    readonly email: string;

    @ApiProperty({example: 'PA$$w0RdD', description: "foydalanuvchi paroli"})
    @IsStrongPassword()
    @MinLength(2,{})
    readonly password: string

    @ApiProperty({example: '998991256987', description: "foydalanuvchi nomeri"})
    readonly phone_number: number;

    @ApiProperty({example: 'location {lat: 24.12.30, lon: 12.35.36}', description: "foydalanuvchi location"})
    readonly location: string
}
