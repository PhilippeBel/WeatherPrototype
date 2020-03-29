import { Injectable } from '@angular/core';
import { City } from 'src/models/city';
import { CITIES_MOCK } from 'src/mocks/city-mocks';
import { Observable, of} from 'rxjs';
import { delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }

  getCities(): Observable<City[]> {    
    return of(CITIES_MOCK).pipe(delay(500));
  }

  getCity(id: number): Observable<City> {    
    return of(CITIES_MOCK.find(city => city.id == id)).pipe(delay(500));
  }
}
