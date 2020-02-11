import { WeatherObservation, ObservationId } from "src/models/weather-observation";

export const WEATHER_OBSERVATIONS: WeatherObservation[] = [ 
    {id: ObservationId.clearDay ,name: "Sunny", icon: "wi-day-sunny"},
    {id: ObservationId.clearNight ,name: "Clear", icon: "wi-night-clear"},
    {id: ObservationId.mostlyClearDay ,name: "Mostly sunny", icon: "wi-day-sunny-overcast"},
    {id: ObservationId.mostlyClearNight ,name: "Mostly clear", icon: "wi-night-alt-partly-cloudy"},
    {id: ObservationId.partlyClearDay ,name: "Partly cloudy", icon: "wi-day-cloudy-high"},
    {id: ObservationId.partlyClearNight ,name: "Partly cloudy", icon: "wi-night-alt-cloudy-high"},
    {id: ObservationId.mostlyCloudyDay ,name: "Mostly cloudy", icon: "wi-day-cloudy"},
    {id: ObservationId.mostlyCloudyNight ,name: "Mostly cloudy", icon: "wi-night-alt-cloudy"},
    {id: ObservationId.cloudy ,name: "Cloudy", icon: "wi-cloudy"},
    {id: ObservationId.lightRain ,name: "Light rain", icon: "wi-showers"},
    {id: ObservationId.rain ,name: "Moderate rain", icon: "wi-rain"},
    {id: ObservationId.heavyRain ,name: "Heavy rain", icon: "wi-rain"},
    {id: ObservationId.thunderstorm ,name: "Thunderstorm", icon: "wi-lightning"},
]