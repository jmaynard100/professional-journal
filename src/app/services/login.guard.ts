import { UserDataService } from './user-data.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router,
ActivatedRouteSnapshot,
RouterStateSnapshot } from '@angular/router';

@Injectable()
/* Sends the user to the /journals page if there is a user in the userDataService*/
export class LoginGuard implements CanActivate {

auth: any = {};

constructor(private userDataService: UserDataService, private router: Router) {

}

canActivate() {
    if (this.userDataService.getUser() === null) {
        return true;
    } else {
        this.router.navigate(['/journals']);
    }
    return false;
    }
}
