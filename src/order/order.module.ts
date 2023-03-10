import { JwtModule } from '@nestjs/jwt/dist';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module, forwardRef } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Order } from './models/order.model';
import { User } from 'src/users/models/user.model';
import { EquipmentModule } from 'src/equipment/equipment.module';
import { Equipment } from 'src/equipment/models/equipment.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[SequelizeModule.forFeature([Order,User,Equipment]),
  forwardRef(() => AuthModule)
],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService]
})
export class OrderModule {}
