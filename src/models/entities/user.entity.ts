import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({name:'first_name'})
  firstName:string;
  @Column({name:'last_name'})
  lastName:string;
  @Column({name:'username'})
  username: string;
  @Column()
  password: string;
  @Column()
  email: string;
  @Column({ default: false })
  isStaff: boolean;
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