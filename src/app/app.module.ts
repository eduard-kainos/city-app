import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { DataService } from './data.service';
import { ListingComponent } from './listing/listing.component';
import {SwitchboardService} from "./switchboard.service";

import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    SwitchboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
