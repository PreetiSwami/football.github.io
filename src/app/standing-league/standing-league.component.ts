import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FootballserviceService } from '../service/footballservice.service';
import {ResponseType ,RespDataType } from '../../app/interface/standings-league';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-standing-league',
  templateUrl: './standing-league.component.html',
  styleUrls: ['./standing-league.component.css']
})
export class StandingLeagueComponent implements OnInit {

  



  constructor(private router: Router,private activatedroute: ActivatedRoute,private footballservices:FootballserviceService) { }
    


countryStandingData:RespDataType[]=[];
responseType:ResponseType[]=[];



selectedCountry:string | null = "England";
selectedCountryId:number | undefined;

public countries:{countryName:string,leagueName:string,leagueId:number}[]=[];

  ngOnInit(): void {
     
  this.activatedroute.paramMap.subscribe(params => {

    
    const countryId = Number(params.get('selectedCountryId'));;
    this.selectedCountry = params.get('selectedCountry');
  

    console.log("countryId",countryId);
    if(countryId)
    {

        this.SelectedCountryData(countryId);
    }
  });
  

}

SelectedCountryData(countryId:number){


  
  this.selectedCountryId=countryId ;


  console.log("api res",countryId)



  if(countryId)
    {
      const chachedData:string|null = localStorage.getItem("cachedStandingData" + countryId);
      if(chachedData)
      {
        const data: ResponseType= JSON.parse(chachedData);
        this.countryStandingData = data.response[0].league.standings[0];
      }else {


        this.footballservices.getFootballData(countryId).subscribe(
          {
            next: (res: ResponseType) => {
              if(res != undefined && res.response != undefined && res.response.length != 0)
              {
                this.countryStandingData = res.response[0].league.standings[0];
                localStorage.setItem("cachedStandingData" + countryId, JSON.stringify(res));
              }
            },
            error: (error:HttpErrorResponse) => {
              console.log(error);
            }
          }
        )
      }
    }
  


}

teamResult(standingTeamId:number){

  console.log("team result")
  this.router.navigate(['teamresult',this.selectedCountry,standingTeamId]);
}


}