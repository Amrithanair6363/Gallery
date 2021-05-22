import { Injectable } from '@angular/core';
import {User} from './login/userModel';
import userData from '../assets/userDB/userDB.json'


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isloggedIn: boolean = false;
  name: any="";
 users: any=[];
  public userList:User= userData;
  constructor() { }

isUserAuthenticated(userid: string, password: string){
  this.isloggedIn=false;
 return userData.find((i: any)=>{
    if((i.userid === userid) && (i.password === password)){
        this.name=i.username;
        this.isloggedIn=true;
        return true;
    }else{
        return false;
    };
    
 });
  }
  // setLocalStorageData(){
  //   localStorage.setItem('name',this.name);
  // }
  // clearLocalStorageData(){
  //   localStorage.clear();
  // }
  
}
