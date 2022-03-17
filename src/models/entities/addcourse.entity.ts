import { Column, Entity } from "typeorm"
import { BaseEntity } from "./base.entity"


@Entity()
export class AddCourse extends BaseEntity {
    @Column()
    title: string
    @Column()
    description: string
    @Column()
    course: string

}