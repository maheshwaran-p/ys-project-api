import { Repository } from 'typeorm/repository/Repository';
import { AddNotes } from '../entities/addnotes.entity';
export declare class AddnotesService {
    private addNotesRespository;
    constructor(addNotesRespository: Repository<AddNotes>);
    getNotes(): Promise<any>;
    createNotes(title: string, description: string, link: string): Promise<any>;
}
