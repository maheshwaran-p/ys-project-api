import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserType } from "./user.entity";

@Entity()
export class Report {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'tittle', nullable: true })
    title: string;

    @Column({ nullable: true })
    country: string;

    @Column({ nullable: true })
    projectLocation: string;

    @Column({ nullable: true })
    email: string;

    @Column({ nullable: true })
    geoTag: string;

    @Column({ nullable: true })
    activity: string;

    @Column({ nullable: true })
    outcome: string;

    @Column({ nullable: true })
    depots: string;

    @Column({ nullable: true })
    infrastructure: string;

    @Column({ nullable: true })
    owershipType: string;

    @Column({ nullable: true })
    sourceOfBamboo: string;

    @Column({ nullable: true })
    noOfIndustry: string;

    @Column({ nullable: true })
    annualTurnOver: string;

    @Column({ nullable: true })
    noOfMale: string;

    @Column({ nullable: true })
    noOfFemale: string;

    @Column({ nullable: true })
    total: string;

    @Column({ nullable: true })
    descriptiveReport: string;

    @Column({ nullable: true })
    materialLink1: string;

    @Column({ nullable: true })
    materialLink2: string;

    @Column({ nullable: true })
    mediaLink1: string;

    @Column({ nullable: true })
    mediaLink2: string;

    @Column({ nullable: true })
    status: string;

    @Column({ nullable: true })
    type: string;

    @Column({
        name: 'trait_type',
        type: 'enum',
        enum: UserType,
        default: UserType.BENEFICIARY
    })
    userType: string;

    @Column({ nullable: true })
    userId: string;


}