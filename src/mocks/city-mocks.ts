import { PROVINCES_MOCK } from './province-mocks';
import { City } from 'src/models/city';
import { WEATHER_OBSERVATIONS } from 'src/constants/weather-observations.constants';
import { ObservationId, WeatherObservation } from 'src/models/weather-observation';
import { CurrentCondition } from 'src/models/current-condition';
import { Wind } from 'src/models/wind';

export const CITIES_MOCK: City[] = [
    {id: 0, name: "Montréal", province: PROVINCES_MOCK[0], currCondition:
    {
        temperatureCelsius: 23, pressureKpa: 101, humidity: 54, dewPointCelsius: 19, visibilityKm: 12, wind: {} as Wind,
        condition: WEATHER_OBSERVATIONS.find(observation => observation.id == ObservationId.thunderstorm)
    } as CurrentCondition
    },
    {id: 1, name: "Québec", province: PROVINCES_MOCK[0], currCondition:     {
        temperatureCelsius: 23, pressureKpa: 101, humidity: 54, dewPointCelsius: 19, visibilityKm: 12, wind: {} as Wind,
        condition: WEATHER_OBSERVATIONS.find(observation => observation.id == ObservationId.clearNight)
    } as CurrentCondition},
    {id: 2, name: "Toronto", province: PROVINCES_MOCK[1], currCondition:     {
        temperatureCelsius: 23, pressureKpa: 101, humidity: 54, dewPointCelsius: 19, visibilityKm: 12, wind: {} as Wind,
        condition: WEATHER_OBSERVATIONS.find(observation => observation.id == ObservationId.lightRain)
    } as CurrentCondition},
    {id: 3, name: "Ottawa", province: PROVINCES_MOCK[1], currCondition:     {
        temperatureCelsius: 23, pressureKpa: 101, humidity: 54, dewPointCelsius: 19, visibilityKm: 12, wind: {} as Wind,
        condition: WEATHER_OBSERVATIONS.find(observation => observation.id == ObservationId.cloudy)
    } as CurrentCondition},
    {id: 4, name: "Vancouver", province: PROVINCES_MOCK[2], currCondition:     {
        temperatureCelsius: 23, pressureKpa: 101, humidity: 54, dewPointCelsius: 19, visibilityKm: 12, wind: {} as Wind,
        condition: WEATHER_OBSERVATIONS.find(observation => observation.id == ObservationId.heavyRain)
    } as CurrentCondition},
    {id: 5, name: "Calgary", province: PROVINCES_MOCK[3], currCondition:     {
        temperatureCelsius: 23, pressureKpa: 101, humidity: 54, dewPointCelsius: 19, visibilityKm: 12, wind: {} as Wind,
        condition: WEATHER_OBSERVATIONS.find(observation => observation.id == ObservationId.clearNight)
    } as CurrentCondition}
];
