
import { ApiProperty } from '@nestjs/swagger';
import {IsNotEmpty, IsString, IsStrongPassword, MinLength,IsEmail, IsNumber} from 'class-validator'


export class CreateEquipmentDto {

    @ApiProperty({example: 'Sabzi', description: "turi"})
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @ApiProperty({example: 5000, description: "narxi"})
    @IsNumber()
    readonly price: number;

    @ApiProperty({example: 'rasm ssilkasi', description: "rasm ssilkasi"})
    @IsString()
    readonly image: string

    @ApiProperty({example: 'malumot', description: "mevaning malumoti"})
    readonly description: string;

   
}
