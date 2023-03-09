import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './addContact/addContact.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes:Routes=[
  {path:'home',component:HomeComponent}
  ,{path:'contact',component:ContactComponent
    ,children:[
        {path:'add',component:AddContactComponent},
        {path:'edit/:id',component:AddContactComponent}
      ]
    }
];

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})

export class AppRoutingModule{}
