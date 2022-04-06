import { Column, Entity, ManyToOne } from "typeorm";
import { AddCourse } from "./addcourse.entity";
import { BaseEntity } from "./base.entity";
import { Student } from "./student.entity";


@Entity()
export class Marks extends BaseEntity{

    @Column()
    mark:number
    
    @ManyToOne(() => Student, student => student.id,{ onDelete: 'CASCADE' })
    student:Student
    @ManyToOne(()=>AddCourse, addcourse=>addcourse.id,)
    addcourse:AddCourse




}