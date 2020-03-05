import { Component, Input } from '@angular/core';
import { BACKGROUND_PATH, BACKGROUNDS_NAME } from 'src/constants/backgrounds-paths';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'weather';

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
