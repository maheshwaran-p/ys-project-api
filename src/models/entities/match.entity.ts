import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Course } from "./course.entity";
import { MatchAnswer } from "./match-answer.entity";
import { MatchQuestion } from "./match-question.entity";


@Entity()
export class MatchEntity extends BaseEntity {

    @ManyToOne(() => Course, course => course.id)
    course: Course;

    @OneToMany(() => MatchQuestion, matchQuestion => matchQuestion.id, { onDelete: 'CASCADE' })
    questions: MatchQuestion[];

}