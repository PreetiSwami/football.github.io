import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ApiUrlService} from '../service/api-url.service';
import {ResponseType} from '../../app/interface/standings-league';
import {fixureType} from '../../app/interface/teams-result';


@Injectable({
  providedIn: 'root'
})
export class FootballserviceService {


  
  baseUrl:String='';

  constructor(private apiUrl:ApiUrlService,private htttp:HttpClient) {

        this.baseUrl = this.apiUrl.getApiUrl();

   }

  public Countries:{countryName:string,leagueName:string,leagueId:number}[] = [
    {
        'countryName':"England",
      'leagueName':"Premier League",
      'leagueId':39
    },
    {
        'countryName':"Spain",
      'leagueName':"La Liga",
      'leagueId':107
    },
    {
        'countryName':"France",
      'leagueName':"Ligue 1",
      'leagueId':61
    },
    {
        'countryName':"Germany",
        'leagueName':"Bundesliga",
        'leagueId':78
    },
    {
        'countryName':"Italy",
        'leagueName':"Serie A",
        'leagueId':71
    }
  ]


  private currentYear() {
    const currentDate: Date = new Date();
    return currentDate.getFullYear();
  }




  public getFootballData(countryId:number){

          const header = new HttpHeaders({
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': '371c13f76b17c5b262275226a39ee20f',
          
          })

          let ApiUrl =  this.baseUrl+`/standings?league=${countryId}&season=${this.currentYear()}`;

          return this.htttp.get<ResponseType>(ApiUrl,{headers:header})

  }


  public  teamResultData(teamId: number, resultCount: number) {


    const header = new HttpHeaders({
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': '371c13f76b17c5b262275226a39ee20f',
    
    })

    let ApiUrl =  this.baseUrl+`/fixtures?season=${this.currentYear()}&team=${teamId}&last=${resultCount}`;

    return this.htttp.get<fixureType>(ApiUrl,{headers:header})
    
  }


}
