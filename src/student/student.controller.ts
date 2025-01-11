
import { Controller, Post, Get, Put, Patch, Delete, Body, Param } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}


  // Read (GET ALL)
  @Get()
  findAll() {
    return this.studentService.getAllStudents();
  }

  // Read (GET ONE)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.studentService.getStudentById(id);
  }

}
