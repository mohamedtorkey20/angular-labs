import { Routes } from '@angular/router';
import { StudentsComponent } from './Components/students/students.component';
import { StudentsDetailsComponent } from './Components/students-details/students-details.component';
import { ErrorComponent } from './Components/error/error.component';
import { AddUserComponent } from './Components/add-student/add-student.component';
import { UpdateStudentComponent } from './Components/update-student/update-student.component';

export const routes: Routes = [
  {path:"",redirectTo:"students",pathMatch:"full"},
  {path:"students",component:StudentsComponent},
  {path:"studentDetails/:id",component:StudentsDetailsComponent},
  {path:"UpdateStudent/:id",component:UpdateStudentComponent},
  {path:"addStudent",component:AddUserComponent},
  {path:"**",component:ErrorComponent},
];
