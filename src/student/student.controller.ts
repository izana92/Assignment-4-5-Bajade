import { Controller, Post, Get, Put, Patch, Delete, Body, Param } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  // CREATE
  @Post()
  create(@Body() student: Partial<Student>) {
    return this.studentService.createStudent(student);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() student: Partial<Student>) {
    return this.studentService.updateStudent(id, student);
  }

  
  @Patch(':id')
  partialUpdate(@Param('id') id: number, @Body() student: Partial<Student>) {
    return this.studentService.partialUpdateStudent(id, student);
  }

 
}