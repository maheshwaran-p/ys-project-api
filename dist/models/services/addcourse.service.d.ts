import { Repository } from 'typeorm/repository/Repository';
import { AddCourse } from '../entities/addcourse.entity';
export declare class AddCourseService {
    private addCourseRespository;
    constructor(addCourseRespository: Repository<AddCourse>);
    updateTotal(id: number, total: string): Promise<any>;
    findOneCourse(courseId: number): Promise<any>;
    deleteOneCourse(courseId: number): Promise<any>;
    getCourse(courseId: number): Promise<any>;
    getAllCourses(): Promise<any>;
    createCourse(title: string, description: string, course: string, stafflink: string): Promise<any>;
    editCourse(title: string, description: string, course: string, stafflink: string, eid: any): Promise<any>;
    findinEdit(id: any): Promise<AddCourse>;
    getTotal(id: any): Promise<AddCourse>;
}
