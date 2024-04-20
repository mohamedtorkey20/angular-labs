import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private readonly http:HttpClient) { }

 private readonly URL_DB="http://localhost:3000/students";
  GetAllStudents()
  {
    return  this.http.get(this.URL_DB);
  }

  GetStudentById(id:number)
  {
    return this.http.get(this.URL_DB+"/"+id);
  }

  AddStudent(student:any)
  {
    return this.http.post(this.URL_DB,student)
  }

  updateStudent(student:any,id:any)
  {
    return this.http.put(this.URL_DB+"/"+id,student)
  }

}
