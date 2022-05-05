import { AddCourseDTO } from 'src/models/dto/addcourse.dto';
import { AddCourseService } from 'src/models/services/addcourse.service';
export declare class AddcourseController {
    private addCourseService;
    constructor(addCourseService: AddCourseService);
    getcourses(addCourseDTO: AddCourseDTO): Promise<any>;
    findOne(params: any): Promise<any>;
    addCourse(addCourseDTO: AddCourseDTO): Promise<any>;
    editCourse(params: any, addCourseDTO: AddCourseDTO): Promise<any>;
    findinEdit(params: any): Promise<import("../../models/entities/addcourse.entity").AddCourse>;
    deleteCourse(params: any): Promise<any>;
    getCourse(params: any): Promise<any>;
    getTotal(params: any): Promise<import("../../models/entities/addcourse.entity").AddCourse>;
    updateTotal(params: any, addCourseDTO: AddCourseDTO): Promise<any>;
}
