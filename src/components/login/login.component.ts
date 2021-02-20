import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/services/login.service';
import { ICredentials } from 'src/model/credentials';

@Component({selector: "app-login", templateUrl: "./login.component.html"})
export class LoginComponent {
    isLoggedIn = false;
    isSuccess = true;

    constructor(private loginService: LoginService, private router: Router) {
    }

    async formSubmitted(credentials: ICredentials) {
        this.isLoggedIn = await this.loginService.login(credentials);
        this.isSuccess = this.isLoggedIn;
        this.isSuccess && this.router.navigate(["books"]);
    }
}
