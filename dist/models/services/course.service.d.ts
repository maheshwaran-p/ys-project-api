import { Repository } from 'typeorm';
import { Course } from '../entities/course.entity';
import { StaffService } from './staff.service';
export declare class CourseService {
    private courseRespository;
    private staffService;
    constructor(courseRespository: Repository<Course>, staffService: StaffService);
    createCourse(staffId: number, courseName: string): Promise<Course>;
    getCourseById(courseId: number): Promise<Course>;
}
