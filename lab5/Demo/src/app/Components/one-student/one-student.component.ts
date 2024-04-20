import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-one-student',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './one-student.component.html',
  styles: ``
})
export class OneStudentComponent {

  @Input() student:any

}
