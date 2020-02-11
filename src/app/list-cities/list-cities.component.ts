import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-cities',
  templateUrl: './list-cities.component.html',
  styleUrls: ['./list-cities.component.scss']
})
export class ListCitiesComponent implements OnInit {

  cities: string[] = [
    "Montréal", "Toronto", "Vancouver", "Québec", "Saguenay", "Ottawa"
  ];

  constructor() { }

  ngOnInit() {
  }

}
