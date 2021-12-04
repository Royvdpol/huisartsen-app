import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {PagenotfoundComponent} from "./pages/pagenotfound/pagenotfound.component";
import {ChatComponent} from "./pages/chat/chat.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/login' , pathMatch: 'full'},
  { path: '**', pathMatch: 'full',
    component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
