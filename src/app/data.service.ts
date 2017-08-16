import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {City} from "./city";

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {}

  cities = this.http.get<City[]>('/api/cities');

  public saveCity(city){
      const body = {
        "cityID": city.id,
        "cityPop": city.population
      };
      const options = {
          headers: new HttpHeaders().set('Content-Type', 'application/json'),
      };

      return this.http.post("/api/city", body, options).subscribe();
  }
}