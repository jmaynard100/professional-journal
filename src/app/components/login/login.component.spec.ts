import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AppModule } from './../../app.module';
import { AppComponent } from './../../app.component';
import { UserDataService } from './../../services/user-data.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {User} from './../../user.model'
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, AppModule, RouterTestingModule.withRoutes([])]
    })
      .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('username field validity', () => {
    let fixture = TestBed.createComponent(LoginComponent);
    let app = fixture.debugElement.componentInstance;
    let errors = {};
    let username = app.loginForm.controls['username'];
    errors = username.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('password field validity', () => {
    let fixture = TestBed.createComponent(LoginComponent);
    let app = fixture.debugElement.componentInstance;
    let errors = {};
    let password = app.loginForm.controls['password'];
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('submitting a form emits a user', () => {
    let fixture = TestBed.createComponent(LoginComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.loginForm.valid).toBeFalsy();
    app.loginForm.controls['username'].setValue("testuser");
    app.loginForm.controls['password'].setValue("123456789");
    expect(app.loginForm.valid).toBeTruthy();

    let user: User;
    // Subscribe to the Observable and store the user in a local variable.
    app.loggedIn.subscribe((value) => user = value);

    // Trigger the login function

    let navigateSpy = spyOn((app).router, 'navigate');
    app.onSubmit();

    expect(navigateSpy).toHaveBeenCalledWith(['/journals']);
  });


  it('should set the payload to a stringified version of our form values', () => {
    let fixture = TestBed.createComponent(LoginComponent);
    let app = fixture.debugElement.componentInstance;
    let password = app.loginForm.controls['password'];
    let username = app.loginForm.controls['username'];
    app.ngOnInit();

    password.setValue('123456');
    username.setValue('testuser');
    app.onSubmit();

    expect(app.payload).toEqual(JSON.stringify({username:"testuser",password:"123456"}));
  });

});