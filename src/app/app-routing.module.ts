import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandingLeagueComponent } from './standing-league/standing-league.component';
import { TeamResultComponent } from './team-result/team-result.component';

const routes: Routes = [
 {path: '', redirectTo: 'standingleague/England/39', pathMatch: 'full' },
 {path:'standingleague/:selectedCountry/:selectedCountryId',component:StandingLeagueComponent},
 {path:'teamresult/:selectedCountry/:standingTeamId',component:TeamResultComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
