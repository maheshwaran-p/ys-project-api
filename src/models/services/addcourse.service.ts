/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection } from 'typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { AddCourse } from '../entities/addcourse.entity';

@Injectable()
export class AddCourseService {

    constructor(
        @InjectRepository(AddCourse)
        private addCourseRespository: Repository<AddCourse>,
       
    ) { }



    async updateTotal(id:number,total : string):Promise<any>{

      return  await getConnection()
        .createQueryBuilder()
        .update(AddCourse)
        .set({total: total })
        .where("id = :id", { id: id })
        .execute();
 

    }

    async findOneCourse( courseId:number) : Promise<any>{

        return await this.addCourseRespository.findOne(courseId);
      }

      async deleteOneCourse( courseId:number) : Promise<any>{

       return await this.addCourseRespository.delete(courseId);
      }


      async getCourse( courseId:number) : Promise<any>{

      //  return await this.addCourseRespository.delete(courseId);

      return await this.addCourseRespository.findOne(courseId);
       }


    

   async getAllCourses() : Promise<any>{

     return await this.addCourseRespository.find();

   }

   async createCourse(title:string, description:string, course:string,stafflink:string) : Promise<any>{

        return await this.addCourseRespository.save({title:title,description:description,course:course,stafflink:stafflink});

    }


}
