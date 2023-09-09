import { Param, Put } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { Course } from 'src/models/entities/course.entity';
import { CourseService } from 'src/models/services/course.service';

@Controller('/staff/:staffId/course')
export class CourseController {
    constructor(
        private courseService: CourseService
    ) { }
    @Put()
    createCourse(@Param('staffId') staffId: number, @Body('courseName') courseName: string): Promise<Course> {
        console.log(staffId);
        return this.courseService.createCourse(staffId, courseName);
    }

}
