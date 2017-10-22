import { AlertService } from './../../services/alert.service';
import { Journal } from './../../journal.model';
import { UserDataService } from './../../services/user-data.service';
import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {User} from './../../user.model'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  payload:string
  @Output() loggedIn = new EventEmitter<User>();
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private userData: UserDataService, private router: Router, private alerts: AlertService) {
    this.loginForm = this.fb.group({
      username: [ '', Validators.required ],
      password: [ '', Validators.required ]
    });
  }

  ngOnInit() {
  }
/* Uses the data in the login form to do authentication*/
  onSubmit() {

    const username = this.loginForm.controls.username.value;
    const password = this.loginForm.controls.password.value;
    this.userData.login(username, password).then(function() {
      this.alerts.setMessage('login Successful', 'green');
      this.router.navigate(['/journals']);
    //   this.loggedIn.emit(
    //     new User(
    //         this.form.value.email,
    //         this.form.value.password
    //     )
    // );
    }.bind(this));
    this.payload = JSON.stringify(this.loginForm.value);
  }
}