import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { DashboardComponent } from './application/dashboard/dashboard.component';
import { TestComponent } from './application/test/test.component';
import { InscriptionComponent } from './authentification/inscription/inscription.component';
import { LoginComponent } from './authentification/login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'inscription',component:InscriptionComponent},
  {path:'application',component:ApplicationComponent,
  children:[
    {path:'dasboard',component:DashboardComponent},
    {path:'test',component:TestComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
