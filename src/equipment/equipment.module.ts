import { JwtModule } from '@nestjs/jwt/dist';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { EquipmentController } from './equipment.controller';
import { Equipment } from './models/equipment.model';
import { Order } from 'src/order/models/order.model';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@Module({
  imports: [SequelizeModule.forFeature([Equipment]),
  JwtModule.register({
    secret: 'process.env.SECRET_KEY',
    signOptions: {
      expiresIn: '24h'
    }
  })],
  controllers: [EquipmentController],
  providers: [EquipmentService]
})
export class EquipmentModule {}
