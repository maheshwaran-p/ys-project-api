import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { MatchAnswer } from "./match-answer.entity";
import { MatchEntity } from "./match.entity";

@Entity()
export class MatchQuestion {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    question: string;

    @OneToOne(() => MatchAnswer, { onDelete: 'CASCADE' })
    @JoinColumn()
    answer: MatchAnswer;


    @ManyToOne(() => MatchEntity, match => match.id, { onDelete: 'CASCADE' })
    @JoinColumn()
    match: MatchEntity;
}