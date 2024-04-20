import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../Services/students.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-students-details',
  standalone: true,
  imports: [
    HttpClientModule
  ],
  providers:[
    StudentsService
  ],
  templateUrl: './students-details.component.html',
  styles: ``
})
export class StudentsDetailsComponent  implements OnInit{

  id:any;
  student:any;
  constructor(route: ActivatedRoute,private studentsSeverice:StudentsService ,private router:Router) {
    this.id = route.snapshot.params['id'];
  }


  UpdateStudent(id:any){
    this.router.navigate(['UpdateStudent/'+id])

  }
  ngOnInit(): void {

    this.studentsSeverice.GetStudentById(this.id).subscribe({
        next:data=>{

          this.student=data
        },
        error:err=>{
          console.error(err);

        }
    })
  }
}
