
import { Controller, Post, Get, Put, Patch, Delete, Body, Param } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  
  // READ (GET ALL)
  @Get()
  findAll() {
    return this.studentService.getAllStudents();
  }

  // READ (GET ONE)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.studentService.getStudentById(id);
  }

  // UPDATE (PUT)
  @Put(':id')
  update(@Param('id') id: number, @Body() student: Partial<Student>) {
    return this.studentService.updateStudent(id, student);
  }

  // PARTIAL UPDATE (PATCH)
  @Patch(':id')
  partialUpdate(@Param('id') id: number, @Body() student: Partial<Student>) {
    return this.studentService.partialUpdateStudent(id, student);
  }

  // DELETE
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.studentService.deleteStudent(id);
  }
}
