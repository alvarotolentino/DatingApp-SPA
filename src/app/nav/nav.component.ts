import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import { AlertifyService } from '../_service/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(
      data => {
        this.alertify.success('logged in successfully');
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  logout() {
    this.model = {};
    this.authService.userToken = null;
    localStorage.removeItem('token');
    this.alertify.message('logged out');
  }

  loggedIn() {
    return this.authService.loggedIn();
  }
}
