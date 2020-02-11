import { Component, OnInit } from '@angular/core';
import { City } from 'src/models/city';
import { CityService } from 'src/services/city.service';

@Component({
  selector: 'app-list-cities',
  templateUrl: './list-cities.component.html',
  styleUrls: ['./list-cities.component.scss']
})
export class ListCitiesComponent implements OnInit {

  cities: City[];

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.cityService.getCities().subscribe(
      cities => this.cities =  cities
    );
  }

}
