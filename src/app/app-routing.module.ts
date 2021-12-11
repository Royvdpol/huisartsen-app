import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {PagenotfoundComponent} from "./pages/pagenotfound/pagenotfound.component";
import {HelpComponent} from "./pages/help/help.component";
import {ChatComponent} from "./pages/chat/chat.component";
import {ConsultComponent} from "./pages/consult/consult.component";
import {DoorverwijzingComponent} from "./pages/doorverwijzing/doorverwijzing.component";
import {BloedonderzoekComponent} from "./pages/bloedonderzoek/bloedonderzoek.component";
import {MedicijnenComponent} from "./pages/medicijnen/medicijnen.component";
import {SpoedComponent} from "./pages/spoed/spoed.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'help', component: HelpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'consult', component: ConsultComponent },
  { path: 'doorverwijzing', component: DoorverwijzingComponent },
  { path: 'bloedonderzoek', component: BloedonderzoekComponent },
  { path: 'medicijnen', component: MedicijnenComponent },
  { path: 'spoed', component: SpoedComponent },
  { path: '', redirectTo: '/login' , pathMatch: 'full'},
  { path: '**', pathMatch: 'full',
    component: PagenotfoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
