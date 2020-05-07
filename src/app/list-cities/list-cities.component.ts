import { Component, OnInit } from '@angular/core';
import { City } from 'src/models/city';
import { CityService } from 'src/services/city/city.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-cities',
  templateUrl: './list-cities.component.html',
  styleUrls: ['./list-cities.component.scss']
})
export class ListCitiesComponent implements OnInit {

  cities: City[];
  displayCities: City[];

  constructor(private cityService: CityService, private router: Router) { }

  ngOnInit() {
    this.cityService.getCities().subscribe(
      cities => {this.cities =  cities;
        this.displayCities = cities;
      }
    );
  }

  accessCity(id: number){
    this.router.navigateByUrl("city/"+id.toString());
  }

  filterCities(text: string){
    this.displayCities = this.cities.filter(city => this.formatText(city.name).includes(this.formatText(text)));
  }

  private formatText(str: string): string{
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
}
