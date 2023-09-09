import { Repository } from 'typeorm/repository/Repository';
import { AddCourse } from '../entities/addcourse.entity';
export declare class AddCourseService {
    private addCourseRespository;
    config: any;
    constructor(addCourseRespository: Repository<AddCourse>);
    signature(): Promise<string>;
    chumma(): Promise<any>;
    updateTotal(id: number, total: number): Promise<any>;
    findOneCourse(courseId: number): Promise<any>;
    deleteOneCourse(courseId: number): Promise<any>;
    getCourse(courseId: number): Promise<any>;
    getAllCourses(): Promise<any>;
    createCourse(title: string, description: string, course: string, stafflink: string): Promise<any>;
}
