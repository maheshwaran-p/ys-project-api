import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./course.entity";
import { User } from "./user.entity";

@Entity()
export class Staff{

    @PrimaryGeneratedColumn()
    id:number;
    @Column({name:'first_name'})
    firstName:string;
    @Column({name:'last_name'})
    lastName:string;
    @Column({name:'username'})
    username: string;
    @Column()
    password:string;

    @OneToOne(()=>User,{onDelete:'CASCADE'})
    @JoinColumn()
    user:User;

    @OneToMany(()=> Course,course=>course.staff)
    courses:Course[];

    @ManyToMany(()=>Course,course=>course.allowedStaffs)
    @JoinTable()
    allowedCourses:Course[];
}