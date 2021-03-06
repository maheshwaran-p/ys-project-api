/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, createQueryBuilder, getConnection, getRepository } from 'typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { MarkDTO } from '../dto/marks.dto';
import { Marks } from '../entities/marks.entity';

@Injectable()
export class MarksService {


    constructor(
        @InjectRepository(Marks)
        private marksRespository: Repository<Marks>,
         private connection: Connection,
       
    ) { }


    async percentage(studentId:number):Promise<any>{

    const query = await this.marksRespository.createQueryBuilder('marks').
    leftJoin('marks.addcourse','addcourse').addSelect(['addcourse.title','addcourse.description','addcourse.total'])
    //leftJoin('total.addcourse','total').addSelect(['total.total',])
    ;

    query.where('marks.studentId = :studentId', {
        studentId: studentId,
      });

     return query.execute();


//     const usersWithRoles = await this.connection
// .getRepository(Marks)
// .createQueryBuilder("marks")
// .leftJoinAndSelect("marks.addcourse", "addcourse")
// .leftJoinAndSelect("marks.addcourse", "total.addcourse")
// .getMany();



// // //console.log(marks);

// console.log(usersWithRoles);
//return usersWithRoles.execute();




    // return await this.marksRespository.createQueryBuilder('c')
    // .select(['c.addcourse', 'c.mark','c.student' ])
    // .leftJoin('c.addcourse', 'addcourse')
    // .where('c.addcourse = :id', { studentId })
    // .getOne();

    // const user = await createQueryBuilder("marks")
    // .leftJoinAndSelect("marks.addcourse", "addcourse")
    // .where("marks.addcourse = :title", { title: "day1" })
    // .getOne();


    //console.log(user);
    }

    async addMarks(markDTO:MarkDTO):Promise<any>{

        let r= await this.marksRespository.find({where:{addcourse:markDTO.addcourseId}})
        console.log(r.length)

        if(r.length!=0){
      console.log('marks already posted');
          

    const q=  await getConnection()
    .createQueryBuilder()
    .delete()
    .from(Marks)
    .where("addcourse= :id", { id: markDTO.addcourseId }).execute()
         
        }
        console.log('marks inserting...');
     const q1= await this.marksRespository.createQueryBuilder()
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
                    ).execute();

                    return q1;

                  
                        
      //  return this.marksRespository.save(markDTO);
                        
    }



  async  leaderboard():Promise<any>{


   
   


    // const query = await this.marksRespository.createQueryBuilder('marks').
    // leftJoin('marks.student','student').addSelect(['student.username','student.firstName','student.lastName'])
    
    // ;

    const MarkSum = await 
    this.marksRespository
    
    .createQueryBuilder("user")
    .leftJoin('user.student','student').addSelect(['student.username','student.firstName','student.lastName'])
    .select("user.student")
    .addSelect("student.username")
    .addSelect("student.firstName")
    .addSelect("student.lastName")
    .addSelect("SUM(user.mark)","sum")
    .groupBy("user.student")
    .getRawMany();

    
    MarkSum.sort(function(a, b) {
        return b.sum - a.sum;
      }); 


  //  console.log(MarkSum);
 return MarkSum;

    }


    

   async getCourseMarks(CourseId:number):Promise<any>{

    let marks = await this.marksRespository.find({where:{addcourse:CourseId}}) ;

    //console.log(marks);
    return marks;

   }



}
