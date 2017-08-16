import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {City} from "./city";

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {}

  cities = this.http.get<City[]>('/api/cities');
}
