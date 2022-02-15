import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { ChatComponent } from './pages/chat/chat.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HelpComponent } from './pages/help/help.component';
import { ConsultComponent } from './pages/consult/consult.component';
import { DoorverwijzingComponent } from './pages/doorverwijzing/doorverwijzing.component';
import { BloedonderzoekComponent } from './pages/bloedonderzoek/bloedonderzoek.component';
import { MedicijnenComponent } from './pages/medicijnen/medicijnen.component';
import { SpoedComponent } from './pages/spoed/spoed.component';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';
import { NoodoproepComponent } from './pages/noodoproep/noodoproep.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopperDirective } from './popper.directive';
import { InlogcodeVergetenComponent } from './pages/inlogcode-vergeten/inlogcode-vergeten.component';
import { InlogcodeAanmakenComponent } from './pages/inlogcode-aanmaken/inlogcode-aanmaken.component';
import { KnopSpoedComponent } from './components/knop-spoed/knop-spoed.component';
import { BeginKnopComponent } from './components/begin-knop/begin-knop.component';
import { ProfielComponent } from './pages/profiel/profiel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PagenotfoundComponent,
    ChatComponent,
    HelpComponent,
    ConsultComponent,
    DoorverwijzingComponent,
    BloedonderzoekComponent,
    MedicijnenComponent,
    SpoedComponent,
    NoodoproepComponent,
    PopperDirective,
    InlogcodeVergetenComponent,
    InlogcodeAanmakenComponent,
    KnopSpoedComponent,
    BeginKnopComponent,
    ProfielComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  // providers: [],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}], //for ng build
  bootstrap: [AppComponent]
})
export class AppModule { }
