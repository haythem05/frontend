import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  token!: string;
  newPassword!: string;
  confirmPassword!: string;
  showPassword: boolean = false;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    // Retrieve the token from the route parameters
    this.route.params.subscribe(params => {
      this.token = params['token'];
    });
  }

  resetPassword(): void {
    this.userService.resetPassword(this.token, this.newPassword).subscribe(
      (response: string) => {
        console.log(response); // Log the response
        alert(response); // Show success message

        // Redirect to the login page after successful password reset
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error(error);
        alert('Failed to reset password. Please try again.'); // Show error message
      }
    );
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
