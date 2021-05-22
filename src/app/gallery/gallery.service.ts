import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';  
import {Image} from './image'
import { catchError } from 'rxjs/operators'
import {LoginService} from '../login.service'

@Injectable()
export class GalleryService {

    images: any=[];

  constructor(private http: HttpClient,private loginService: LoginService) { }

  getImages(): Observable<Image[]> {
   
    if(this.loginService.isloggedIn){
    return this.http.get<Image[]>('../../assets/userDB/private.json').pipe(
        catchError(this.handleError));
    }else{
      localStorage.clear();
      return this.http.get<Image[]>('../../assets/userDB/public.json').pipe(
        catchError(this.handleError));
    }
   
   
  }
  private handleError(err: HttpErrorResponse) {
    console.log(err);
    return Observable.throw(err.error() || 'Server error');
}
}
