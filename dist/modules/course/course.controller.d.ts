import { Course } from 'src/models/entities/course.entity';
import { CourseService } from 'src/models/services/course.service';
export declare class CourseController {
    private courseService;
    constructor(courseService: CourseService);
    createCourse(staffId: number, courseName: string): Promise<Course>;
}
