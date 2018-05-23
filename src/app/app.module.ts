import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppConstants } from './app.constants';


const appRoutes: Routes = [
   { 
       path: 'auth', 
       component: AuthComponent,
       children: [ 
	             {
     		        path: 'register',
		        component: RegisterComponent
	             },
		     {
     		        path: 'login',
		        component: LoginComponent
	             }
                 ]
   }
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AuthComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
  ],
  providers: [AppConstants],
  bootstrap: [AppComponent]
})
export class AppModule { }
