import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { UserAuthService } from '../Services/user-auth.service';
import { Router } from '@angular/router';
import { User } from '../Models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  captcha: string = '';
  recaptchaResolved : boolean = false;
  warningMessage: string = '';
  constructor(private userService: UserService , private userAuthService:UserAuthService , private router : Router) {
   
  }
  ngOnInit(): void {
   
  }


  resolved(captchaRespone: string | null) {
    if (captchaRespone !== null) {
      this.captcha = captchaRespone;
      this.recaptchaResolved = true;
      console.log('resolved captcha with response :' + this.captcha);
    }
  }
  
  login(loginForm: NgForm) {
    if (this.recaptchaResolved) {
      // Proceed with login
      this.userService.login(loginForm.value).subscribe(
        (response: any) => {
          const token = response.token;
          const userData = response.user;
          this.userAuthService.setTokenAndUser(token, userData);
          this.router.navigate(['/home']);
        },
        (error) => {
          console.log(error);
          if (error.error && error.error.message === 'Your account is banned') {
            // Account is banned, display appropriate message
            this.warningMessage = 'Your account is banned ! Please contact the ';
          } else {
            // Regular error handling for invalid credentials
            this.warningMessage = 'Invalid credentials. Please try again.';
          }
        }
      );
    } else {
      // Display a message indicating that the reCAPTCHA needs to be resolved
      this.warningMessage = 'Please complete the reCAPTCHA.';
    }
  }
  
  
  
  

 

  


}