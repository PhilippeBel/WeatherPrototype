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
    this.sideNav.toggle();
  }

}
