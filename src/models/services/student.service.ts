/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStaffDTO } from '../dto/create-staff.dto';
import { CreateStudentDTO } from '../dto/create-student.dto';
import { Student } from '../entities/student.entity';
import { UserService } from './user.service';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private studentRespository: Repository<Student>,
        private userService: UserService,
    ) { }

    async createStudent(createStudentDTO: CreateStudentDTO): Promise<Student> {

        let { username, password, email } = createStudentDTO;
        const user = await this.userService.createUser(username, password, email);
        let { firstName, lastName } = createStudentDTO;
        return this.studentRespository.save({ firstName: firstName, lastName: lastName, user: user });
    }

    async findStudentByUserId(userId: number): Promise<Student> {
        return this.studentRespository.findOne({ user: { id: userId } })
    }
}
