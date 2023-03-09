
import { Table, Model, DataType, Column, BelongsTo, ForeignKey } from "sequelize-typescript";
import { EquipmentModule } from "src/equipment/equipment.module";
import { Equipment } from "src/equipment/models/equipment.model";
import { User } from "src/users/models/user.model";

interface orderCreationAttrs {
    order_date: Date;
    amount: number;
    total_price: number    
}

@Table({tableName: 'order'})
export class Order extends Model<Order,orderCreationAttrs> {

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ForeignKey(()=> Equipment)
    @Column({
        type: DataType.INTEGER
    })
    equipmentId: number;


    @ForeignKey(()=> User)
    @Column({
        type: DataType.INTEGER
    })
    UserId: number;


    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: Date.now()        
    })
    order_date: Date;

    @Column({
        type: DataType.INTEGER
    })
    amount: number

    @Column({
        type: DataType.INTEGER,
    })
    total_price: number;
    

    @BelongsTo(()=> User)
    user: User[];

    @BelongsTo(()=> Equipment)
    equipment: Equipment[];
}