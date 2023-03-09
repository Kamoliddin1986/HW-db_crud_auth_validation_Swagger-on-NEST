import { JwtModule } from '@nestjs/jwt/dist';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Order } from './models/order.model';
import { User } from 'src/users/models/user.model';
import { EquipmentModule } from 'src/equipment/equipment.module';
import { Equipment } from 'src/equipment/models/equipment.model';

@Module({
  imports:[SequelizeModule.forFeature([Order,User,Equipment]),
  JwtModule.register({
    secret: 'process.env.SECRET_KEY',
    signOptions: {
      expiresIn: '24h'
    }
  })],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService]
})
export class OrderModule {}
