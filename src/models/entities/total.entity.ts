import { Column, Entity, ManyToOne } from "typeorm";
import { AddCourse } from "./addcourse.entity";
import { BaseEntity } from "./base.entity";


@Entity()
export class Total extends BaseEntity{

    @ManyToOne(()=>AddCourse, addcourse=>addcourse.id)
    addcourse:AddCourse
    @Column({ nullable: true })
    total:number
    
}