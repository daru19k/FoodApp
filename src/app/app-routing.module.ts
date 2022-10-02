import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"menu",component:MenuComponent}, 
  {path:"login",component:LoginComponent},
  {path:"sidebar",component:SidebarComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
