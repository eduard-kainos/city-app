import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {City} from './city';

@Injectable()
export class SwitchboardService {

  constructor() { }

  private cityWatcher = new Subject<City>();
  public city$ = this.cityWatcher.asObservable();

  public switchCity(city: City) {
    if (city) {
      this.cityWatcher.next(city);
    }
  }

}
