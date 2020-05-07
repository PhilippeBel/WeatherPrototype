import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/models/news';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() newsList: News[];
  newsDisplayed: News[] = new Array<News>();
  slideCounter: number;
  maxSlides: number;

  constructor() { }

  ngOnInit() {
    this.slideCounter = 1;
    this.maxSlides = this.newsList.length - 1;
    this.newsDisplayed.push(this.newsList[0]);
    this.newsDisplayed.push(this.newsList[1]);
  }

  nextSlide(){
    if(this.slideCounter < this.maxSlides){
      this.slideCounter++;
      this.newsDisplayed.shift();
      this.newsDisplayed.push(this.newsList[this.slideCounter]);
    }
  }

  previousSlide(){
    if(this.slideCounter > 1){
      this.slideCounter--;
      this.newsDisplayed.pop();
      this.newsDisplayed.unshift(this.newsList[this.slideCounter - 1]);
    }
  }

}
