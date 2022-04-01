import { Course } from "./course.entity";
import { User } from "./user.entity";
export declare class Staff {
    id: number;
    user: User;
    courses: Course[];
    allowedCourses: Course[];
}
