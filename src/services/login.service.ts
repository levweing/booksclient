import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { ICredentials } from 'src/model/credentials';

@Injectable()
export class LoginService {
    isLoggedIn = false;

    constructor(@Inject("LOGIN_URL") private loginUrl: string,
        private httpClient: HttpClient) {

    }

    private loggedIn(token: string): void {
        sessionStorage.jwt = token;
        this.isLoggedIn = true;
    }

    private responseReceived(httpHeaders: HttpHeaders): boolean {
        const token = httpHeaders.get("Authorization");

        token && this.loggedIn(token);

        const result = !!token;

        return result;
    }

    private requestFailed(error: any): boolean {
        console.error(error);
        return false;
    }

    login(credentials: ICredentials): Promise<boolean> {
        const obs = this.httpClient.post(
            this.loginUrl, credentials, {observe: "response"});

        const result = obs.toPromise().then(
            v => this.responseReceived(v.headers), e => this.requestFailed(e));

        return result;
    }

    logout(): void {
        sessionStorage.jwt = "";
        this.isLoggedIn = false;
    }
}
