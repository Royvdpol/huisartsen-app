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
    SpoedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
