import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class mcq {


    @PrimaryGeneratedColumn()
    id: number
    @Column()
    question: string
    @Column()
    option1: string
    @Column()
    option2: string
    @Column()
    option3: string
    @Column()
    option4: string
    @Column()
    option5: string
    @Column()
    option6: string

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