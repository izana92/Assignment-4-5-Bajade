import { Controller, Post, Get, Put, Patch, Delete, Body, Param } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  findAll() {
    return this.studentService.getAllStudents();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.studentService.getStudentById(id);
  }

}