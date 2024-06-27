import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-emailsender',
  templateUrl: './emailsender.component.html',
  styleUrls: ['./emailsender.component.css']
})
export class EmailsenderComponent {
  emailForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // Method to access form controls and their errors
  getFormControlErrors(controlName: string): string {
    const control = this.emailForm.get(controlName);
    if (control && control.errors) {
      if (control.errors['required']) {
        return 'Email is required';
      } else if (control.errors['email']) {
        return 'Invalid email format';
      }
    }
    return '';
  }

  sendResetLink(): void {
    if (this.emailForm.valid) {
      const email = this.emailForm.value.email;
      this.userService.forgotPassword(email).subscribe(
        (response: any) => {
          if (response === '0') {
            alert('No account found with this email.');
          } 
          else  {
            alert('Password reset link sent to your email.');
            this.router.navigate(['/login']); // Redirect to login page after sending email
          } 
        }
      );
    }
  }
}
