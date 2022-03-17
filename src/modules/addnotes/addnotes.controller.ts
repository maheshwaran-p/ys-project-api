/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddNotesDTO } from 'src/models/dto/addnotes.dto';
import { AddnotesService } from 'src/models/services/addnotes.service';

@Controller('/note')
export class AddnotesController {

    constructor(
        private addnotesService: AddnotesService
    ) { }






    @Get('')
    getcourses(
        addNotesDTO:AddNotesDTO
      
    ) {
       
        return this.addnotesService.getNotes();
    }

    @Post()
    async createNotes( @Body() addNotesDTO:AddNotesDTO):Promise<any>{

    return await this.addnotesService.createNotes(addNotesDTO.title,addNotesDTO.description,addNotesDTO.link)

    }


}
