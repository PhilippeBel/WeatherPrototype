import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/models/news';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() newsList: News[];

  constructor() { }

  ngOnInit() {
  }

}
