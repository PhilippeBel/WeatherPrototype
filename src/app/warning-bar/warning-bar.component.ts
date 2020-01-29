import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-warning-bar',
  templateUrl: './warning-bar.component.html',
  styleUrls: ['./warning-bar.component.scss']
})

export class WarningBarComponent implements OnInit {

  initTop: number;
  title: string;
  frame: number;
  top: number;
  height: string;
  everyFrame: Observable<number> = timer(0,33);
  visi: string;
  closing: boolean;

  constructor() {
    this.initTop = -48;
    this.closing = false;
    this.top = this.initTop;
    this.frame = 0;
    this.height = this.frame.toString() + "px";
    this.visi = "hidden"; }

  ngOnInit() {
    this.title = "Winter storm warning";


    this.everyFrame.subscribe((seconds) => this.Update());
  }

  Update(){
    this.frame++;
    
    if(this.closing){
      if(this.top < -64)
      this.visi = "hidden"
      else
      this.top = (this.initTop - this.frame * 4);
    } else if(this.top < 0){
    this.visi = "visible";
    this.top = (this.initTop + this.frame * 4);
    }
    
    this.height = this.top.toString() + "px";
  }

  onClick() {
    if(!this.closing){
    this.closing = true;
    this.initTop = this.top;
    this.frame = 0;
    }
  }

}
