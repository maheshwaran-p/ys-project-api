import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { MatchEntity } from "./match.entity";

@Entity()
export class MatchAnswer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    answer: string;

}