import { Column, Entity } from "typeorm"
import { BaseEntity } from "./base.entity"


@Entity()
export class AddNotes extends BaseEntity {
    @Column()
    title: string
    @Column()
    description: string
    @Column()
    link: string
  

}