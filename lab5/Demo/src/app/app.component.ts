import { Component} from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet
    ,HeaderComponent
    ,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



  students:{name:string,age:string}[]=[];
  GetData(student:any)
  {
    this.students.push(student);
    // console.log(student);

  }


}
