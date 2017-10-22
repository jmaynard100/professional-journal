import { ApiService } from './../../services/api.service';
import { User } from './../../user.model';
import { Journal } from './../../journal.model';
import { UserDataService } from './../../services/user-data.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  providers: [UserDataService,ApiService],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})



export class RegisterComponent implements OnInit {
  payload: string
  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private userData: UserDataService, private router: Router) {
    this.registerForm = this.fb.group({
      firstName: [ '', Validators.required ],
      lastName: [ '', Validators.required ],
      username: [ '', Validators.required ],
      email: [ '', Validators.required ],
      password: [ '', Validators.required ]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const user = new User();
    user.firstname = this.registerForm.controls.firstName.value;
    user.lastname = this.registerForm.controls.lastName.value;
    user.username = this.registerForm.controls.username.value;
    user.email = this.registerForm.controls.email.value;
    user.password = this.registerForm.controls.password.value;
    this.userData.createUser(user).then(function() {
      this.router.navigate(['/login']);
    }.bind(this));
    this.payload = JSON.stringify(this.registerForm.value);
  }
}
