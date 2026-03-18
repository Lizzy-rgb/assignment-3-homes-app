import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housinglocationinfo';
import {HousingService} from '../housing-service';


@Component({
  selector: 'app-home',
  imports: [NgFor, HousingLocation],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocationList: HousingLocationInfo[] = [];
  filterString = '';

  // Injecting HousingService into the Component
  housingService: HousingService = inject(HousingService);

  constructor(){
    // setting housingLocationlist to the data array in HousingService
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

  get filteredHousingLocationList(): HousingLocationInfo[] {
    const filter = this.filterString?.trim().toLowerCase();
    if (!filter) {
      return this.housingLocationList;
    }
    return this.housingLocationList.filter((location) =>
      location.city.toLowerCase().includes(filter)
    );
  }
}