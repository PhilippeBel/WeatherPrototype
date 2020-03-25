import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-upper-bar',
  templateUrl: './upper-bar.component.html',
  styleUrls: ['./upper-bar.component.scss']
})
export class UpperBarComponent implements OnInit {

  constructor() { }

  @Input()
  sideNav: MatSidenav;

  ngOnInit() {
  }

  toggleSideNav(){
    //this.playAudio(this.sideNav.opened);
    this.sideNav.toggle();
  }

  playAudio(isOpened: boolean){
    let audioPath: string;
    if(isOpened)
      audioPath = "assets/sounds/click_close.wav";
    else
      audioPath = "assets/sounds/click_expand.wav";

      var audio = new Audio(audioPath);
      audio.play();
  }

}
