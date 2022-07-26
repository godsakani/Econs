import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
 
  constructor( public auth: AuthService , public router: Router ) {
 
  }

  // ngOnInit(): void {
  // }

  logout(){
    this.auth.logout();
  }

}
