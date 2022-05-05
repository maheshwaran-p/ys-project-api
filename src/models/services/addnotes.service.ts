/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { AddNotes } from '../entities/addnotes.entity';

@Injectable()
export class AddnotesService {



    constructor(
        @InjectRepository(AddNotes)
        private addNotesRespository: Repository<AddNotes>,
       
    ) { }

async deleteOneNote(noteId:any):Promise<any>{
    return await this.addNotesRespository.delete(noteId);
}
    async getNotes() : Promise<any>{

        return await this.addNotesRespository.find();
      }


    async createNotes(title:string, description:string, link:string) : Promise<any>{

        return await this.addNotesRespository.save({title:title,description:description,link:link});

    }
}
