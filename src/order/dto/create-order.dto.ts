
import { ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty, IsString,  IsNumber} from 'class-validator'



export class CreateOrderDto {

    @ApiProperty({example: 'equipmentIdsi', description: "ID"})
    @IsNotEmpty()
    @IsNumber()
    readonly equipmentId: number;

    @ApiProperty({example: 'UserIdsi', description: "ID"})
    @IsNotEmpty()
    @IsNumber()
    readonly UserId: number;

    @ApiProperty({example: 15, description: "soni"})
    @IsNumber()
    readonly amount: number;

    @ApiProperty({example: 15, description: "summasi"})
    @IsNumber()
    readonly total_price: number;
   
}
