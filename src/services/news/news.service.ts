import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { NEWS_MOCK } from 'src/mocks/news-mock';
import { delay } from 'rxjs/operators';
import { News } from 'src/models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  public getAllNews(): Observable<News[]>{
    return of(NEWS_MOCK).pipe(delay(500));
  }

  public getNews(id: number): Observable<News>{
    return of(NEWS_MOCK.find(news => news.id == id)).pipe(delay(500));
  }
}
