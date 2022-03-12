import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { MatchEntity } from "./match.entity";

@Entity()
export class MatchAnswer {
    @PrimaryGeneratedColumn()
    id: number;

    answer: string;

    @ManyToOne(() => MatchEntity, match => match.id)
    match: MatchEntity;

}