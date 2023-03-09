import { Table , Model,DataType,Column,HasMany } from "sequelize-typescript";
import { Order } from "../../order/models/order.model";

interface equipmentCreationAttrs {
    name: string;
    price: number;
    image: string;
    description: string;    
    
}

@Table({tableName:'equipment'})
export class Equipment extends Model<Equipment, equipmentCreationAttrs>{

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    name: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,        
    })
    price: number;

    @Column({
        type: DataType.STRING
    })
    image: string

    @Column({
        type: DataType.STRING,
    })
    description: string;
    
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: true
    })
    is_active: boolean;


    @HasMany(()=> Order)
    order: Order[]
}