import { AddNotesDTO } from 'src/models/dto/addnotes.dto';
import { AddnotesService } from 'src/models/services/addnotes.service';
export declare class AddnotesController {
    private addnotesService;
    constructor(addnotesService: AddnotesService);
    getcourses(addNotesDTO: AddNotesDTO): Promise<any>;
    location(): Promise<void>;
    createNotes(addNotesDTO: AddNotesDTO): Promise<any>;
}
