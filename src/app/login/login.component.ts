import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from '../login.service'
import {User} from './userModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users!: User;
  loginForm = new FormGroup({
    userID: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
})

  
  error: boolean=false;
  constructor(private formBuilder: FormBuilder,private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm.get('userID').valueChanges.subscribe(val => {
      this.error = false;
    });
    this.loginForm.get('password').valueChanges.subscribe(val => {
      this.error = false;
    });
  }

onFormSubmit() {
  this.error=false;
  let uname = this.loginForm.controls['userID'].value;
  let pwd = this.loginForm.controls['password'].value;
  if(this.loginService.isUserAuthenticated(uname, pwd)){
    
    localStorage.setItem('name',this.loginService.name);
    this.loginForm.reset();
    this.router.navigate(['/gallery']);
  }else{ 
    // this.loginForm.reset();
    this.error=true;
    localStorage.clear(); 
    this.router.navigate(['/login']);
  }
}

}
