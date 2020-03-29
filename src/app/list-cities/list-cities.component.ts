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
  displayCities: City[];

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.cityService.getCities().subscribe(
      cities => {this.cities =  cities;
        this.displayCities = cities;
      }
    );
  }

  accessCity(id: number){
    console.log(id);
  }

  filterCities(text: string){
    this.displayCities = this.cities.filter(city => this.formatText(city.name).includes(this.formatText(text)));
  }

  private formatText(str: string): string{
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
}
