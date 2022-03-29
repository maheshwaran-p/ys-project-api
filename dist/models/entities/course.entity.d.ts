import { Staff } from "./staff.entity";
export declare class Course {
    id: number;
    courseName: string;
    staff: Staff;
    allowedStaffs: Staff[];
}
