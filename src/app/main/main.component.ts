import { Component, OnInit, Input } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() backgroundImage: string;

  finishedLoading: boolean;

  constructor() { }

  ngOnInit() {
    this.finishedLoading = false;
    this.backgroundImage = "assets\backgrounds\alberta-lake.jpg";

    timer(1000).subscribe(nb => {
      this.finishedLoading = true;
    })

  }

}
