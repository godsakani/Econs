import { Component, OnInit } from '@angular/core';
import { Auth1Service } from '../shared/auth1.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService: Auth1Service) { 
  }

  
  ngOnInit(): void {
  }

}
