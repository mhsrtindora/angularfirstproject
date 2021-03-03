import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectoryComponent } from './directory/directory.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

const route: Routes = [
  { path: 'directory', component: DirectoryComponent },
  { path: 'home', component: HomeComponent },
  { path: 'nav', component: NavbarComponent },
];

export const routes = RouterModule.forRoot(route);



/*@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }*/
