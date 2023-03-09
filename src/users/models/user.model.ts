
import { Table,Model,DataType,Column,HasMany } from "sequelize-typescript";
import { Order } from "src/order/models/order.model";




interface UserCreationAttrs {
    name: string;
    email: string;
    password: string;
    phone_number: number;
    location: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    name: true

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    email: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password: string

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    is_admin: boolean;
    


    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    is_active: boolean;


    @HasMany(()=> Order)
    order: Order[]
}
