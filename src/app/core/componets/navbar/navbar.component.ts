import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  home(){
    this.router.navigate(['']);
  }

  about(){
    this.router.navigate(['about']);
  }

  blog(){
    this.router.navigate(['blog']);
  }

  project(){
    this.router.navigate(['project']);
  }


}
