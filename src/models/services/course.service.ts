import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from '../entities/course.entity';
import { StaffService } from './staff.service';

@Injectable()
export class CourseService {
    constructor(
        @InjectRepository(Course)
        private courseRespository: Repository<Course>,
        private staffService: StaffService
    ) { }

    async createCourse(staffId: number, courseName: string): Promise<Course> {
        const staff = await this.staffService.getStaffById(staffId);
        return this.courseRespository.save({ staff: staff, courseName: courseName });
    }

    getCourseById(courseId: number): Promise<Course> {
        return this.courseRespository.findOne({ id: courseId });
    }
}
