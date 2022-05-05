import { AddNotesDTO } from 'src/models/dto/addnotes.dto';
import { AddnotesService } from 'src/models/services/addnotes.service';
export declare class AddnotesController {
    private addnotesService;
    constructor(addnotesService: AddnotesService);
    deleteNote(params: any): Promise<any>;
    getcourses(addNotesDTO: AddNotesDTO): Promise<any>;
    createNotes(addNotesDTO: AddNotesDTO): Promise<any>;
}
