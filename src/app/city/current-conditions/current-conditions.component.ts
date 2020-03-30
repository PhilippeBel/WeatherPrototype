import { Component, OnInit, Input } from '@angular/core';
import { CurrentCondition } from 'src/models/current-condition';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.scss']
})
export class CurrentConditionsComponent implements OnInit {

  @Input()
  currentCondition: CurrentCondition;

  constructor() { }

  ngOnInit() {
  }

}
