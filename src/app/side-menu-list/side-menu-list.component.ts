import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  selector: 'app-side-menu-list',
  templateUrl: './side-menu-list.component.html',
  styleUrls: ['./side-menu-list.component.scss']
})
export class SideMenuListComponent implements OnInit {

  @Input() sideMenu: SideMenuComponent;
  elements: Array<SideMenuElement> = new Array<SideMenuElement>();

  constructor(private router: Router) { }

  ngOnInit() {
    this.elements.push({link: "",icon: "wi-day-sunny", text: "News" } as SideMenuElement);
    this.elements.push({link: "/cities",icon: "wi-day-sunny-overcast", text: "Current conditions" } as SideMenuElement);
    this.elements.push({link: "/warnings",icon: "wi-storm-warning", text: "Watches & Warnings" } as SideMenuElement);
    this.elements.push({link: "/radar",icon: "wi-rain", text: "Radar" } as SideMenuElement); 
    this.elements.push({link: "/lightning",icon: "wi-lightning", text: "Lightning map" } as SideMenuElement);
  }

  accessLink(link_: string){
      this.router.navigateByUrl(link_);
      this.sideMenu.closeSideMenu();
    }
}
