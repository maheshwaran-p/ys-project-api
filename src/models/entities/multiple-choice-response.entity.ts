import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { MultipleChoice } from "./multiple-choice.entity";
import { Student } from "./student.entity";

@Entity()
export class MultipleChoiceResponse extends BaseEntity {
    @ManyToOne(() => Student, student => student.id, { onDelete: 'CASCADE' })
    student: Student;
    @ManyToOne(() => MultipleChoice, multipleChoice => multipleChoice.id, { onDelete: 'CASCADE' })
    question: MultipleChoice;
    @Column({ nullable: false })
    answer: string;
    @Column({ nullable: false })
    isCorrect: boolean;
}