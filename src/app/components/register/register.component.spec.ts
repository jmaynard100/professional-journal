import { AppModule } from './../../app.module';
import { AppComponent } from './../../app.component';
import { UserDataService } from './../../services/user-data.service';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  // let component: RegisterComponent;
  //let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, AppModule]
    })
      .compileComponents();
  }));



  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     imports: [ReactiveFormsModule,AppModule]

  //   });
  // });

  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ RegisterComponent ]
  //   })
  // })

  it('should be created', inject([UserDataService], (service: UserDataService) => {
    let fixture = TestBed.createComponent(RegisterComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();

  }));

  it('email field validity', () => {
    let fixture = TestBed.createComponent(RegisterComponent);
    let app = fixture.debugElement.componentInstance;
    let errors = {};
    let email = app.registerForm.controls['email'];
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('firstname field validity', () => {
    let fixture = TestBed.createComponent(RegisterComponent);
    let app = fixture.debugElement.componentInstance;
    let errors = {};
    let firstname = app.registerForm.controls['firstName'];
    errors = firstname.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('lastname field validity', () => {
    let fixture = TestBed.createComponent(RegisterComponent);
    let app = fixture.debugElement.componentInstance;
    let errors = {};
    let lastname = app.registerForm.controls['lastName'];
    errors = lastname.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('username field validity', () => {
    let fixture = TestBed.createComponent(RegisterComponent);
    let app = fixture.debugElement.componentInstance;
    let errors = {};
    let username = app.registerForm.controls['username'];
    errors = username.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('password field validity', () => {
    let fixture = TestBed.createComponent(RegisterComponent);
    let app = fixture.debugElement.componentInstance;
    let errors = {};
    let password = app.registerForm.controls['password'];
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();
  });



  it('should set the `payload` to a stringified version of our form values', () => {
    let fixture = TestBed.createComponent(RegisterComponent);
    let app = fixture.debugElement.componentInstance;
  //  let errors = {};
    let password = app.registerForm.controls['password'];
    let username = app.registerForm.controls['username'];
    let lastname = app.registerForm.controls['lastName'];
    let firstname = app.registerForm.controls['firstName'];
    let email = app.registerForm.controls['email'];
    app.ngOnInit();

    app.registerForm.controls['password'].setValue('pass123');
    app.registerForm.controls['username'].setValue('king_in_the_north');
    app.registerForm.controls['lastName'].setValue('snow');
    app.registerForm.controls['firstName'].setValue('john');    
    app.registerForm.controls['email'].setValue('test@test.com');
    app.onSubmit();

    expect(app.payload).toEqual(JSON.stringify({firstName:"john",lastName:"snow",username:"king_in_the_north",email:"test@test.com",password:"pass123"}));

    // let fixture = TestBed.createComponent(RegisterComponent);
    // let app = fixture.debugElement.componentInstance;
    // app. = [
    //   {
    //     controlType: 'text',
    //     id: 'first',
    //     label: 'My First',
    //     required: false
    //   },
    //   {
    //     controlType: 'text',
    //     id: 'second',
    //     label: 'Second!',
    //     required: true
    //   }
    // ];
    // app.ngOnInit();

    // app.formGroup.controls['first'].setValue('pizza');
    // app.submit();

    // expect(app.payload).toEqual(JSON.stringify({ first: 'pizza', second: '' }));
  });


  // it('should create the app', inject([UserDataService], (service: UserDataService) => {
  //   let fixture = TestBed.createComponent(RegisterComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy;
  // }));
});
