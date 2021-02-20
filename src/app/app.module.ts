import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/components/login/login.component';
import { LoginService } from 'src/services/login.service';
import { BooksService } from 'src/services/books.service';
import { AuthGuard } from 'src/services/auth-guard.service';
import { BooksTableComponent } from 'src/components/books-table/books-table.component';
import { BasketComponent } from 'src/components/basket/basket.component';

const SERVER_URL = "http://localhost:8080/";

@NgModule({
  declarations: [
    AppComponent, LoginComponent, BooksTableComponent, BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: "LOGIN_URL", useValue: `${SERVER_URL}login`},
    {provide: "BOOKS_URL", useValue: `${SERVER_URL}api/books`},
    {provide: "ORDER_URL", useValue: `${SERVER_URL}api/orderBooks`},
    LoginService, BooksService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
