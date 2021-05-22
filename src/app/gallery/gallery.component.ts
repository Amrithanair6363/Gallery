import { Component, OnInit } from '@angular/core';
import {GalleryService} from './gallery.service'
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  imageWidth = 120;
    imageHeight = 120;
    imageMargin = 0;
  images: any=[];
  errorMessage: string="";
  public showModal=false;
  public modalimageurl='';
  constructor(private _galleryService: GalleryService) { 
   
    this._galleryService.getImages()
    .subscribe(
      images => {
        // this._galleryService.images=images;
        // this.images=this._galleryService.images;
        this.images=images;
      },
      error =>this.errorMessage = <any>error);
  }

  ngOnInit(): void {
  }

  myModal(val){
    this.myModal=val
  }

}
