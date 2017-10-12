import { UserDataService } from './user-data.service';
import { Injectable }             from '@angular/core';
import { CanActivate, Router,
ActivatedRouteSnapshot,
RouterStateSnapshot }    from '@angular/router';

@Injectable()

export class AuthGuard implements CanActivate {

auth: any = {};

constructor(private userDataService: UserDataService, private router: Router) {

}

canActivate() {
    if (this.userDataService.getUser() !== null) {
        return true;
    }
    else {
        this.router.navigate(['/']);
    }
    return false;
}
}