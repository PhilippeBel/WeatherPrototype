enum WindDirection {N,NNE,NE,ENE,E,ESE,SE,SSE,S,SSW,SW,WSW,W,WNW,NW,NNW}

export class Wind{
    speedKph: number;
    gustsKph: number;
    direction: WindDirection;
}