import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { StandingLeagueComponent } from './standing-league/standing-league.component';
import { TeamResultComponent } from './team-result/team-result.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StandingLeagueComponent,
    TeamResultComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
