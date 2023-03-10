import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUIModule } from '../material-ui.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,MaterialUIModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
