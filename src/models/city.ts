import { Province } from './province';
import { CurrentCondition } from './current-condition';

export class City {
    id: number;
    name: string;
    province: Province;
    currCondition: CurrentCondition;
}