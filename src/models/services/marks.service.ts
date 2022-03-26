/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { MarkDTO } from '../dto/marks.dto';
import { Marks } from '../entities/marks.entity';

@Injectable()
export class MarksService {


    constructor(
        @InjectRepository(Marks)
        private marksRespository: Repository<Marks>,
       
    ) { }

    async addMarks(markDTO:MarkDTO):Promise<any>{

       const query = this.marksRespository.createQueryBuilder()
                    .insert()
                    .into(Marks)
                    .values(
                        markDTO.studentMark.map(
                            e=>({
                                mark:e.mark,
                                addcourse: {id:markDTO.addcourseId},
                                student:{id:e.studentId}
                            })
                        )
                    )


                    return query.execute();

      //  return this.marksRespository.save(markDTO);

    }

}
