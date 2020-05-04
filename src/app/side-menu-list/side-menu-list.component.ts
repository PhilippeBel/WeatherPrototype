import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu-list',
  templateUrl: './side-menu-list.component.html',
  styleUrls: ['./side-menu-list.component.scss']
})
export class SideMenuListComponent implements OnInit {

  public elements: Array<SideMenuElement> = new Array<SideMenuElement>();

  constructor(private router: Router) { }

  ngOnInit() {
    this.elements.push({link: "",icon: "wi-day-sunny", text: "News" } as SideMenuElement);
    this.elements.push({link: "/cities",icon: "wi-day-sunny-overcast", text: "Current conditions" } as SideMenuElement);
  }

}
