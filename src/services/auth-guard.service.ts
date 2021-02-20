import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { LoginService } from './login.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private loginService: LoginService, private router: Router) {
    }

    canActivate(): boolean {
        const result = this.loginService.isLoggedIn;

        result || this.router.navigate(["login"]);
        return result;
    }
}
