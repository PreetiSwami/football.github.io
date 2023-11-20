import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {

  constructor() { }

  getApiUrl() {
    return environment.API_URL;
  }
}
