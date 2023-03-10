import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './addContact/addContact.component';
import { ContactComponent } from './contact/contact.component';
import { Error_notFoundComponent } from './error_notFound/error_notFound.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes:Routes=[
  {path:'home',component:HomeComponent}
  ,{path:'contact',component:ContactComponent
    ,children:[
        {path:'add',component:AddContactComponent},
        {path:'edit/:id',component:AddContactComponent}
      ]
    }
  ,{path:'access',loadChildren:()=>import('./access/access.module').then(opt=>opt.AccessModule)}
  ,{path:'login',loadComponent:()=>import('./login/login.component').then(opt=>opt.LoginComponent)}
  ,{path:'**',component:Error_notFoundComponent}
];

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})

export class AppRoutingModule{}
