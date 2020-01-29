import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-warning-bar',
  templateUrl: './warning-bar.component.html',
  styleUrls: ['./warning-bar.component.scss']
})



export class WarningBarComponent implements OnInit {

  readonly INIT_TOP = -48;
  title: string;
  frame: number;
  top: number;
  height: string;
  everyFrame: Observable<number> = timer(0,33);

  constructor() { }

  ngOnInit() {
    this.title = "Winter storm warning";
    this.top = this.INIT_TOP;
    this.frame = 0;
    this.height = this.frame.toString() + "px";

    this.everyFrame.subscribe((seconds) => this.Update());
  }

  Update(){
    this.frame++;
    if(this.top < 0){
    this.top = (this.INIT_TOP + this.frame * 2);
    this.height = this.top.toString() + "px";
    }
  }

  

}
