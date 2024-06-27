import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UpdateUserComponent } from './update-user/update-user.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RoomComponent } from './room/room.component';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './Password-Reset/reset-password/reset-password.component';
import { EmailsenderComponent } from './Password-Reset/emailsender/emailsender.component';
import { RecaptchaModule } from 'ng-recaptcha';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    TestComponent,
    UpdateUserComponent,
    RoomComponent,
    UserDetailsComponent,
    ResetPasswordComponent,
    EmailsenderComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    RecaptchaModule




    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
