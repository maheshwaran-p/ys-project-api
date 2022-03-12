import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Staff } from "./staff.entity";

@Entity()
export class Course{
    @PrimaryGeneratedColumn()
    id:number;
    @Column({name:'course_name'})
    courseName:string;
    @ManyToOne(()=> Staff,staff=>staff.id,{nullable:false})
    staff:Staff;
    @ManyToMany(()=>Staff,staff=>staff.allowedCourses)
    allowedStaffs:Staff[];
}