import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AddContactComponent } from './addContact/addContact.component';
//import { AccessRoutingModule } from './access/access-routing.module';
import { Error_notFoundComponent } from './error_notFound/error_notFound.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      ContactComponent,
      AddContactComponent,
      Error_notFoundComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
    //AccessRoutingModule,
    //LoginComponent //because it is a stand alone component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
