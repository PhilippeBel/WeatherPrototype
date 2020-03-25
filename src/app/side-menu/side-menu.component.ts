import { Component, OnInit } from '@angular/core';
import { BACKGROUND_PATH, BACKGROUNDS_NAME } from 'src/constants/backgrounds-paths';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

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


}
