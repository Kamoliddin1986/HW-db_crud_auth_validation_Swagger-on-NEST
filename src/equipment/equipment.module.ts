import { JwtModule } from '@nestjs/jwt/dist';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module, forwardRef } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { EquipmentController } from './equipment.controller';
import { Equipment } from './models/equipment.model';
import { Order } from 'src/order/models/order.model';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [SequelizeModule.forFeature([Equipment]),
  forwardRef(() => AuthModule)
 ],
  controllers: [EquipmentController],
  providers: [EquipmentService]
})
export class EquipmentModule {}
