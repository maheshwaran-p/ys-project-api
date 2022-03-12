import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Course } from "./course.entity";



@Entity()
export class MultipleChoice extends BaseEntity {
    @Column()
    question: string
    @Column()
    answer: string
    @Column()
    choiceOne:string;
    @Column({nullable:true})
    choiceTwo:string;
    @Column({nullable:true})
    choiceThree:string;
    @ManyToOne(()=>Course,course=>course.id)
    course:Course;
}