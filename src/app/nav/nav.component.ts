import { Component, OnInit } from '@angular/core';
import { FootballserviceService} from '../service/footballservice.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public footballservices:FootballserviceService,public router:Router) { }

    public countries:{countryName:string,leagueName:string,leagueId:number}[]=[];
    
    selectedCountry:string="England"; 
    selectedCountryId:number|undefined; 
      
      

  ngOnInit(): void {

    this.countries = this.footballservices.Countries;

    
    console.log("countries",this.countries);


  }

  selectedCountryName(countryName:string,leagueId :number){

    this.selectedCountryId = leagueId ;
    this.selectedCountry=countryName;
    this.router.navigate(['standingleague',this.selectedCountry,this.selectedCountryId]);

    

  }

}
