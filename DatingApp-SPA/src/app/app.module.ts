import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';

@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent, RegisterComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [AuthService, ErrorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}

// topics touched on:
/*
1) Angular Services to keep components as simple as possible and how to inject them
2) Conditionally rendering elements in the Dom
3) Input properties to pass data down from parent to child
4) Output properties and emiters to send data up and affect parent status from child components
5) How to work with parent and child components
6)
*/
