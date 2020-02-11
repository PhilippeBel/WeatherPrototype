import { Injectable } from '@angular/core';
import { City } from 'src/models/city';
import { CITIES_MOCK } from 'src/mocks/city-mocks';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }

  getCities(): Observable<City[]> {
    return of(CITIES_MOCK);
  }
}
