import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../Services/user-auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit{

  constructor(private  userAuthService: UserAuthService , private router :Router)
  {

  }
  ngOnInit(): void {
    
  }
  public isLoggedIn()
  {
    return this.userAuthService.isLoggedIn();
  }
  public logout()
  {
 localStorage.removeItem('jwtToken');
 localStorage.removeItem('userData');
 this.router.navigate(['/login']);
  }


  

}
