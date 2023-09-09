import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


export enum UserType {
  HQ_STAFF = 'HQ_STAFF',
  PROJECT_STAFF = 'PROJECT_STAFF',
  BENEFICIARY = 'BENEFICIARY'
}


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'firstname' })
  firstname: string;

  @Column({ name: 'surname' })
  surname: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({ default: false })
  isStaff: boolean;

  @Column({ name: 'mobile_number' })
  mobileNumber: string;

  @Column({ default: false })

  @Column({ name: 'door_number' })
  doorNumber: string;

  @Column()
  country: string;

  @Column()
  state: string;

  @Column()
  district: string;

  @Column()
  block: string;

  @Column()
  salutation: string;


  @Column({
    name: 'user_type',
    type: 'enum',
    enum: UserType,
    default: UserType.BENEFICIARY
  })
  userType: string;

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