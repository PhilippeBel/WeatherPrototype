import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/services/city.service';
import { City } from 'src/models/city';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city-page',
  templateUrl: './city-page.component.html',
  styleUrls: ['./city-page.component.scss']
})
export class CityPageComponent implements OnInit {

  city: City;

  constructor(private cityService: CityService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.cityService.getCity(Number.parseInt(id)).subscribe(
      city => {
        this.city = city;
      }
    );
  }

}
