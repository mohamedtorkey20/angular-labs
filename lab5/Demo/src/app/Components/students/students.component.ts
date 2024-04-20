import { Component, OnInit } from '@angular/core';
import { OneStudentComponent } from '../one-student/one-student.component';
import { StudentsService } from '../../Services/students.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterModule,
    OneStudentComponent

  ],
  providers:[
    StudentsService
  ],
  templateUrl: './students.component.html',
  styles: ``
})
export class StudentsComponent implements  OnInit{
  students:any

  constructor( private studenetService:StudentsService){}


  ngOnInit(): void {
    this.studenetService.GetAllStudents().subscribe({
      next:data=>{
        this.students=data;
      },

      error:err=>{
        console.error(err);

      }
    })
  }

}
