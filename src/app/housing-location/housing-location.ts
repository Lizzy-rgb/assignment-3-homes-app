import { Component, input } from '@angular/core';
import { HousingLocationInfo } from '../housinglocationinfo';
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterOutlet, RouterLink, RouterModule],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.css',
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}
