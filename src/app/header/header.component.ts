import { Component, OnInit,Input } from '@angular/core';
import {LoginService} from '../login.service'
import { faPowerOff} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faPowerOff = faPowerOff;
  name:any='';
  loginTitle = 'Login';
  isLoggedIN: Boolean=false;
  
   
  constructor(private loginService: LoginService,private router: Router) {}
  
  ngOnInit(): void { }

  
  ngDoCheck(): void {
    this.isLoggedIN=this.loginService.isloggedIn;
    this.name = localStorage.getItem('name');
}


login() {
   this.router.navigate(['/login']);
}

logout(){
  this.loginService.isloggedIn=false;
  this.loginService.name="";
}

}
