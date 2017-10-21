import { UserDataService } from './../../services/user-data.service';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ RegisterComponent ]
  //   })
  //   .compileComponents();
  // }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ]
    })
  })

  it('should be created', inject([UserDataService], (service: UserDataService) => {
    expect(component).toBeTruthy();
  }));


  // it('should be created', inject([AlertService], (service: AlertService) => {
  //   expect(service).toBeTruthy();
  // }));

  it('should create the app', inject([UserDataService], (service: UserDataService) => {
    let fixture = TestBed.createComponent(RegisterComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy;
  }));
});
