import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  creds = {
    strategy: 'local',
    email: 'admin@system.local',
    password: 'P0pc0rn1'
  }

  error: boolean = false;
  errorMessage: '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }


  login() {
    this.authService.logIn(this.creds)
      .then( data => {
        localStorage.setItem('user_data', data.user);
        this.router.navigate(['/']);
      })
      .catch( error => {
        this.error = true;
        this.errorMessage = error.message;
      })
  }
  

}
