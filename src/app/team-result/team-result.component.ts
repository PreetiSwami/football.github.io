import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common'
import { FootballserviceService } from '../service/footballservice.service';
import {fixtureDataType,fixureType} from '../../app/interface/teams-result';
import {HttpErrorResponse} from '@angular/common/http'

@Component({
  selector: 'app-team-result',
  templateUrl: './team-result.component.html',
  styleUrls: ['./team-result.component.css']
})
export class TeamResultComponent implements OnInit {

  
  teamResultResponse:fixtureDataType[]=[];

  constructor(private activateRoute:ActivatedRoute,private footballservices:FootballserviceService,private location:Location) { }

  

  ngOnInit(): void {

    this.activateRoute.paramMap.subscribe(params => {
      
      const teamId:string|null = params.get('standingTeamId');
      if(teamId)
      {
        this.teamResult(+teamId);
      }
     
    });
  }

  teamResult(teamId:number){

    const resultCount:number = 10;
    const chachedData:string|null = localStorage.getItem("cachedTeamData"+teamId);
    
    if(chachedData)
    {
      const res: fixureType = JSON.parse(chachedData);
      if(res != null && res.response != null)
      {
        this.teamResultResponse = res.response;
        localStorage.setItem("cachedFixtureData"+teamId, JSON.stringify(res));
        console.log("chachedData",res);
      }

    }else {

      this.footballservices.teamResultData(teamId,resultCount).subscribe(
        {
          next: (res: fixureType) => {
            
            if(res != null && res.response != null)
            {
              this.teamResultResponse = res.response;
              localStorage.setItem("cachedTeamData"+teamId, JSON.stringify(res));
              console.log("Team Data from api",res);
              this.teamResultResponse[0].goals.home
            }
          },
          error: (error:HttpErrorResponse) => {
            console.log(error);
          }
        }
      )

    }

   
    
  }

  previouspage(){
    this.location.back();
  }

}
