import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BACKGROUND_PATH, BACKGROUNDS_NAME } from 'src/constants/backgrounds-paths';
import { MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @ViewChild("sidenavContainer",{ read: MatSidenavContainer }) sidenavContainer: MatSidenavContainer;

  constructor() { }
  
  backgroundImage: string;

  ngOnInit() {
    this.backgroundImage = this.getRandomBackgroundPath();
  }
  
  private getRandomBackgroundPath(): string {
    let result: string = BACKGROUND_PATH;
    result += BACKGROUNDS_NAME[ Math.floor(Math.random() * BACKGROUNDS_NAME.length) ];
    return result;
  }

  public closeSideMenu(){
   this.sidenavContainer.close();
  }

}
