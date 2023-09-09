import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Student{
    @PrimaryGeneratedColumn()
    id:number;
    @Column({name:'first_name'})
    firstName:string;
    @Column({name:'last_name'})
    lastName:string;
    @Column({name:'username'})
    username:string
   
    @OneToOne(()=>User,{onDelete:'CASCADE'})
    @JoinColumn()
    user:User;
}