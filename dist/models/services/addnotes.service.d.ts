import { Repository } from 'typeorm/repository/Repository';
import { AddNotes } from '../entities/addnotes.entity';
export declare class AddnotesService {
    private addNotesRespository;
    constructor(addNotesRespository: Repository<AddNotes>);
    deleteOneNote(noteId: any): Promise<any>;
    getNotes(): Promise<any>;
    createNotes(title: string, description: string, link: string): Promise<any>;
}
