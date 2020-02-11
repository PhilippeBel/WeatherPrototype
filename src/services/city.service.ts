import { Injectable } from '@angular/core';
import { City } from 'src/models/city';
import { CITIES_MOCK } from 'src/mocks/city-mocks';


@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }

  getCities(): City[] {
    return CITIES_MOCK;
  }
}
