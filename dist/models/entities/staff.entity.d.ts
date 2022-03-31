import { Course } from "./course.entity";
import { User } from "./user.entity";
export declare class Staff {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    user: User;
    courses: Course[];
    allowedCourses: Course[];
}
