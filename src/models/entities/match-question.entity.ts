import { Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { MatchAnswer } from "./match-answer.entity";
import { MatchEntity } from "./match.entity";

@Entity()
export class MatchQuestion {

    @PrimaryGeneratedColumn()
    id: number;

    question: string;

    @OneToOne(() => MatchAnswer)
    @JoinColumn()
    answer: MatchAnswer;


    @ManyToOne(() => MatchEntity, match => match.id)
    match: MatchEntity;
}