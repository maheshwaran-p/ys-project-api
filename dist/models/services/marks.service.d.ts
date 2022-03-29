import { Connection } from 'typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { MarkDTO } from '../dto/marks.dto';
import { Marks } from '../entities/marks.entity';
export declare class MarksService {
    private marksRespository;
    private connection;
    constructor(marksRespository: Repository<Marks>, connection: Connection);
    percentage(studentId: number): Promise<any>;
    addMarks(markDTO: MarkDTO): Promise<any>;
    leaderboard(): Promise<any>;
    getCourseMarks(CourseId: number): Promise<any>;
}
