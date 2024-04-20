import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../Services/students.service';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-student',
  standalone: true,
  imports: [
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[
      StudentsService
  ],
  templateUrl: './update-student.component.html',
  styles: ``
})
export class UpdateStudentComponent implements OnInit {
  id:any
  student:any
  constructor(private route:ActivatedRoute, private studentsSeverice:StudentsService, private router:Router){
    this.id = route.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.studentsSeverice.GetStudentById(this.id).subscribe({
      next:data=>{

        this.student=data;
        this.form.patchValue({
          name: this.student.name,
          email: this.student.email,
          phone: this.student.phone,
          gpa: this.student.GPA,
          level: this.student.level
        });
      },
      error:err=>{
        console.error(err);

      }
  })
  }


  updateStudent(){

    let student={name:this.form.controls['name'].value,
                phone:this.form.controls['phone'].value,
                email:this.form.controls['email'].value,
                gpa:this.form.controls['gpa'].value,
                level:this.form.controls['level'].value
              };

              

  this.studentsSeverice.updateStudent(student,this.id).subscribe();
  this.router.navigate(['/students']);
  }


 form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone:new FormControl('',[Validators.required,Validators.maxLength(11)]),
    gpa:new FormControl('',[Validators.required,Validators.min(0),Validators.max(4)]),
    level:new FormControl('',[Validators.required])
  });


  get nameValid() {
    return this.form.controls['name'].valid;
  }

  get emailValid() {
    return this.form.controls['email'].valid;
  }

  get phoneValid() {
    return this.form.controls['phone'].valid;
  }

  get gpaValid() {
    return this.form.controls['gpa'].valid;
  }
  get levelValid() {
    return this.form.controls['level'].valid;
  }
}
