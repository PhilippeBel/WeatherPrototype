import { News } from 'src/models/news';

export const NEWS_MOCK : News[] = [
    {id: 0, title:"Tornado Season 2020",
     imagePath:"tornado.jpg",
     description:"Check out which area will be more affected by the next outbreaks.",
      articlePath: "article-1.html"} as News,

      {id: 1, title:"How radars detect severe weather",
      imagePath:"radar.gif",
      description:"Learn how the doppler effect is used to detect rain and thunderstorms.",
       articlePath: "article-1.html"} as News,

];