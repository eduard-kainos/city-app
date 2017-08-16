import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import { City } from '../city';
import {SwitchboardService} from '../switchboard.service';
import {Subscription} from 'rxjs/Subscription';
import {isUndefined} from "util";
import {DataService} from "../data.service";

@Component({
  selector: 'city-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {
  city: City;
  switchboard: SwitchboardService;
  subCity: Subscription;
  data: DataService;

  constructor(switchboard: SwitchboardService, data: DataService) {
    this.data = data;
    this.switchboard = switchboard;
  }

  ngOnInit(): void {
    this.subCity = this.switchboard.city$.subscribe((c) => {
      this.city = c;
    });
  }

  ngOnDestroy(): void {
    this.subCity.unsubscribe();
  }

  becomeAvailable(city){
      city.edit = true;
  }

  becomeUnavailable(city){
      city.edit = undefined;
  }

  onEdit(city){
    if(isUndefined(city.edit)){
      this.becomeAvailable(city);
    }else{
        this.becomeUnavailable(city);
    }
  }

  onSave(city){
    this.data.saveCity(city);
    this.becomeUnavailable(city);
  }
}
