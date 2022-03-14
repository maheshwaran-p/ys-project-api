import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { MatchAnswer } from "./match-answer.entity";
import { MatchQuestion } from "./match-question.entity";
import { Student } from "./student.entity";

@Entity()
export class MatchResponse {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => Student, { onDelete: 'CASCADE' })
    student: Student;
    @ManyToOne(() => MatchQuestion, { onDelete: 'CASCADE' })
    question: MatchQuestion;
    @ManyToOne(() => MatchAnswer, { onDelete: 'CASCADE' })
    answer: MatchAnswer;

    @Column({ default: false })
    isCorrect: boolean;

}