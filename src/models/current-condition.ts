import { Wind } from './wind';
import { WeatherObservation } from './weather-observation';

export class CurrentCondition{
    condition: WeatherObservation;
    temperatureCelsius: number;
    pressureKpa: number;
    humidity: number;
    dewPointCelsius: number;
    visibilityKm: number;
    wind: Wind;
}