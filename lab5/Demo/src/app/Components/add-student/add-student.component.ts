import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentsService } from '../../Services/students.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    StudentsService
  ],
  templateUrl: './add-student.component.html',
  styles: ``
})
export class AddUserComponent {
  constructor(private studentSeverice:StudentsService,private router: Router){}

  addStudent(){

    let student={name:this.form.controls['name'].value,
                phone:this.form.controls['phone'].value,
                email:this.form.controls['email'].value,
                gpa:this.form.controls['gpa'].value,
                level:this.form.controls['level'].value
              };
  this.studentSeverice.AddStudent(student).subscribe();
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
