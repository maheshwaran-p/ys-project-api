import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class FillInTheBlanks {

    @PrimaryColumn()
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