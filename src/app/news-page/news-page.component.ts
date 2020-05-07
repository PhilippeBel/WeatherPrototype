import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/services/news/news.service';
import { News } from 'src/models/news';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  newsList: News[];

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getAllNews().subscribe(
      news => {
        this.newsList = news;
      }
    );
  }
}
