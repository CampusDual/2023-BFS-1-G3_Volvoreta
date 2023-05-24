import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from "./user-list/user-list.component";
import { UserComponent } from "./user/user.component";
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "users", component: UserListComponent },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "user", component: UserComponent },
  { path: "user/:id", component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
