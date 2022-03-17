/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { AddCourse } from '../entities/addcourse.entity';

@Injectable()
export class AddCourseService {

    constructor(
        @InjectRepository(AddCourse)
        private addCourseRespository: Repository<AddCourse>,
       
    ) { }



   async getcourses() : Promise<any>{

     return await this.addCourseRespository.find();
   }

   async createCourse(title:string, description:string, course:string) : Promise<any>{

        return await this.addCourseRespository.save({title:title,description:description,course:course})


    }


}