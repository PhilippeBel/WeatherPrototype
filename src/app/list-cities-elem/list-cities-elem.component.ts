import { Component, OnInit, Input } from '@angular/core';
import { City } from 'src/models/city';

@Component({
  selector: 'app-list-cities-elem',
  templateUrl: './list-cities-elem.component.html',
  styleUrls: ['./list-cities-elem.component.scss']
})
export class ListCitiesElemComponent implements OnInit {

  @Input() city: City;

  constructor() { }

  ngOnInit() {
  }

}
