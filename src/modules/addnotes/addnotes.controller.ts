/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AddNotesDTO } from 'src/models/dto/addnotes.dto';
import { AddnotesService } from 'src/models/services/addnotes.service';

@Controller('/addnote')
export class AddnotesController {

    constructor(
        private addnotesService: AddnotesService
    ) { }




    @Get('delete/:id')
    async  deleteNote(@Param() params){
  
          console.log(params.id);
          return await this.addnotesService.deleteOneNote(params.id);
      }
  


    @Get('/response')
   async getcourses(
        addNotesDTO:AddNotesDTO
      
    ) {
       
        return await this.addnotesService.getNotes();
    }

    @Post()
    async createNotes( @Body() addNotesDTO:AddNotesDTO):Promise<any>{

    return await this.addnotesService.createNotes(addNotesDTO.title,addNotesDTO.description,addNotesDTO.link)

    }


}
