import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  loginName: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public localStorage: LocalStorageService
  ) { }

  ngOnInit() {
    this.setMessage();
    // get login from local storage to not make user write his login each time
    this.loginName = localStorage.getItem('login');
  }
  private setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';
    this.authService.login(this.loginName).subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
        // Redirect the user
        localStorage.setItem('login', this.loginName);
        this.router.navigate([redirect]);
      } else {
        alert('Uncorrect user name');
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

}
