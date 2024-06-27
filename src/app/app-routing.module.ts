import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AuthGuard } from './Guard/auth.guard';
import { RoomComponent } from './room/room.component';
import { ResetPasswordComponent } from './Password-Reset/reset-password/reset-password.component';
import { EmailsenderComponent } from './Password-Reset/emailsender/emailsender.component';



const routes: Routes = [
  {path: '', component: LoginComponent },
  {path:  'login', component: LoginComponent },
  {path: 'home', component: HomeComponent},
  {path:  'test', component: TestComponent,canActivate: [AuthGuard]},
  {path:  'userDetails', component:UserDetailsComponent,canActivate: [AuthGuard]},
  {path: 'updateUser/:id', component:UpdateUserComponent,canActivate: [AuthGuard]},
  {path: 'room', component:RoomComponent,canActivate: [AuthGuard]},
  {path: 'resetpassword/:token', component: ResetPasswordComponent},
  {path: 'emailsender' , component:EmailsenderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
