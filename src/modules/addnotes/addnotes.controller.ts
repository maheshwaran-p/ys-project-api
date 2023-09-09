/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { response } from 'express';
import { AddNotesDTO } from 'src/models/dto/addnotes.dto';
import { AddnotesService } from 'src/models/services/addnotes.service';

@Controller('/addnote')
export class AddnotesController {

    constructor(
        private addnotesService: AddnotesService
    ) { }






    @Get('/response')
    getcourses(
        addNotesDTO:AddNotesDTO
      
    ) {
       
        return this.addnotesService.getNotes();
    }

    @Get('/test')
    async location(){

        await console.log(response.json);
    }

    @Post()
    async createNotes( @Body() addNotesDTO:AddNotesDTO):Promise<any>{

    return await this.addnotesService.createNotes(addNotesDTO.title,addNotesDTO.description,addNotesDTO.link)

    }


}
