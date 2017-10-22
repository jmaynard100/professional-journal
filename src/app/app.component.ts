import { AlertService } from './services/alert.service';
import { Router } from '@angular/router';
import { UserDataService } from './services/user-data.service';
import { LoginComponent } from './components/login/login.component';
import { Component } from '@angular/core';

/**
 * 
 */
@Component({
  selector: 'app-root',
  providers: [UserDataService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  constructor ( private userData: UserDataService, private router: Router, public alerts: AlertService) {  }

  logout() {
    this.userData.emptyData();
    this.router.navigate(['/']);
  }
}
