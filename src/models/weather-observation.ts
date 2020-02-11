export enum ObservationId {
    clearDay,
    mostlyClearDay,
    partlyClearDay,
    mostlyCloudyDay,
    clearNight,
    mostlyClearNight,
    partlyClearNight,
    mostlyCloudyNight,
    cloudy,
    lightRain,
    rain,
    heavyRain,
    thunderstorm
}

export class WeatherObservation {
    id: number;
    icon: string;
    name: string;
}