import { AlertService } from './../../services/alert.service';
import { Journal } from './../../journal.model';
import { UserDataService } from './../../services/user-data.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private userData: UserDataService, private router: Router, private alerts: AlertService) {
    this.loginForm = this.fb.group({
      username: [ '', Validators.required ],
      password: [ '', Validators.required ]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const username = this.loginForm.controls.username.value;
    const password = this.loginForm.controls.password.value;
    this.userData.login(username, password).then(function() {
      this.alerts.setMessage('login Successful', 'green');
      this.router.navigate(['/journals']);
    }.bind(this));
  }
}
