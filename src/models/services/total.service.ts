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



    console.log(totalDto.total);

    let r= await this.totalRespository.find({where:{addcourse:totalDto.addcourseId}})
    if(r.length==0)
{
   const q = await  this.totalRespository
    .createQueryBuilder()
    .insert()
    .into(Total)
    .values({
         addcourse: {id:totalDto.addcourseId},
         total: totalDto.total 
       
    })
    .execute();
    return q;

    }
    else{


        const q = await  this.totalRespository
        .createQueryBuilder()
        .update(Total)
        .set({
             addcourse: {id:totalDto.addcourseId},
             total: totalDto.total 
             
           
        })
        .where("addcourse = :id", { id: totalDto.addcourseId })
        .execute();
        return q;
    }

}

   
    //return this.totalRespository.save({addcourse:addcourseId,total:total})

}
