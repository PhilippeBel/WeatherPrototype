import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/models/news';

const SLIDE_SPEED = 7;

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
  offsetX: number;
  

  constructor() { }

  ngOnInit() {
    this.slideCounter = 1;
    this.offsetX = 0;
    this.maxSlides = this.newsList.length - 1;
    this.newsDisplayed.push(this.newsList[0]);
    this.newsDisplayed.push(this.newsList[1]);
    setInterval(() =>{
      this.updateFrame();
    },17);
  }

  updateFrame(){
    if(this.offsetX > 0)
    {
      this.offsetX -= SLIDE_SPEED;
      if(this.offsetX < SLIDE_SPEED)
        this.offsetX = 0;
    }
    else if(this.offsetX < 0){
      this.offsetX += SLIDE_SPEED;
      if(this.offsetX > SLIDE_SPEED)
        this.offsetX = 0;
    }
  }

  nextSlide(){
    if(this.slideCounter < this.maxSlides){
      this.offsetX = 50;
      this.slideCounter++;
      this.newsDisplayed.shift();
      this.newsDisplayed.push(this.newsList[this.slideCounter]);
    }
  }

  previousSlide(){
    if(this.slideCounter > 1){
      this.offsetX = -50;
      this.slideCounter--;
      this.newsDisplayed.pop();
      this.newsDisplayed.unshift(this.newsList[this.slideCounter - 1]);
    }
  }

}
