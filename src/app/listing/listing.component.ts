import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { City } from '../city';
import {SwitchboardService} from '../switchboard.service';

@Component({
  selector: 'city-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {

  data: DataService;
  thisCity: City;
  switchboard: SwitchboardService;

  constructor(dataService: DataService, switchboard: SwitchboardService){
    this.data = dataService;
    this.switchboard = switchboard;
  }

  onSelect (newCity: City): void {
    this.thisCity = newCity;
    this.switchboard.switchCity(this.thisCity);
  }

}
