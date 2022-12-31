import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentification/login/login.component';
import { InscriptionComponent } from './authentification/inscription/inscription.component';
import { MenuComponent } from './application/menu/menu.component';
import { NavigationComponent } from './application/navigation/navigation.component';
import { FooterComponent } from './application/footer/footer.component';
import { HeaderComponent } from './application/header/header.component';
import { ApplicationComponent } from './application/application.component';
import { DashboardComponent } from './application/dashboard/dashboard.component';
import { TestComponent } from './application/test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    LoginComponent,
    InscriptionComponent,
    MenuComponent,
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
