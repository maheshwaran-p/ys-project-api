/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection } from 'typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { TotalDTO } from '../dto/total.dto';
import { Total } from '../entities/total.entity';

@Injectable()
export class TotalService {

    constructor(
        @InjectRepository(Total)
        private totalRespository: Repository<Total>,
       
    ) { }

   async updateTotal(totalDto:any):Promise<any>{

     this.totalRespository
    .createQueryBuilder()
    .insert()
    .into(Total)
    .values({
         addcourse: {id:totalDto.addcourseId}, total: totalDto.total 
       
    })
    .execute();

    }

    //return this.totalRespository.save({addcourse:addcourseId,total:total})

}
