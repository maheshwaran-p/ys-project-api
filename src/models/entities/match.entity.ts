import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class MatchTheFollowing {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    question: string
    @Column()
    answer: string
    @Column({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;
    @Column({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    updatedAt: Date;


}