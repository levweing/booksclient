import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksTableComponent } from 'src/components/books-table/books-table.component';
import { LoginComponent } from 'src/components/login/login.component';
import { AuthGuard } from 'src/services/auth-guard.service';
import { BasketComponent } from 'src/components/basket/basket.component';


const routes: Routes = [];

routes.push({path: "", redirectTo: "/books", pathMatch: "full"});
routes.push({path: "books", component: BooksTableComponent, canActivate: [AuthGuard]});
routes.push({path: "basket", component: BasketComponent, canActivate: [AuthGuard]});
routes.push({path: "login", component: LoginComponent});

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
