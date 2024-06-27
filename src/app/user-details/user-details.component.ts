import { Component, NgModule } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { UserAuthService } from '../Services/user-auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent {

  user: User = new User();

  constructor(private userServ: UserService, private router: Router, private authserv: UserAuthService) { }

  ngOnInit(): void {
    const userData = this.authserv.getUserData();
    if (userData) {
      const userId = userData.userId;
      this.userServ.getUserById(userId).subscribe((user) => {
        this.user = user;
      });
    }
  }

  deleteUser(id: number) {
    this.userServ.DeleteProfil(id).subscribe(() => {
      window.location.reload();
      this.authserv.clear();
    });
  }

  editUser(id: number) {
    this.router.navigate(['/updateUser', id]);
  }
}

