import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  text: string;
  @Output() textEvent: EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
    
  }

  TextChange(){
    this.textEvent.emit(this.text);
  }

}
