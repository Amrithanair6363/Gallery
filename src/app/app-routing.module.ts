import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'home', component:HomepageComponent},
  {path:'about', component:AboutComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'login', component:LoginComponent},
  {path:'validuser', component:LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
